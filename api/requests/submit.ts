import Requests from '../../tables/requests.table'
import { captureCustomerEvent, ContactType } from '@crm/sdk'
import { writeWorkspaceEvent } from '@start/sdk'
import { sendNotificationToAccountOwners } from '@user-notifier/sdk'

export const submitRequestRoute = app.post('/')
  .body(s => ({
    name: s.string().optional(),
    phone: s.string(),
    licensePlate: s.string().optional(),
    vin: s.string().optional(),
    carBrand: s.string().optional(),
    carModel: s.string().optional(),
    articleNumber: s.string().optional(),
    searchType: s.enum(['licensePlate', 'vin', 'model', 'article']),
    comment: s.string().optional(),
    utmSource: s.string().optional(),
    utmMedium: s.string().optional(),
    utmCampaign: s.string().optional(),
    uid: s.string().optional(),
  }))
  .handle(async (ctx, req) => {
    const body = req.body

    const request = await Requests.create(ctx, {
      name: body.name || '',
      phone: body.phone,
      licensePlate: body.licensePlate || '',
      vin: body.vin || '',
      carBrand: body.carBrand || '',
      carModel: body.carModel || '',
      articleNumber: body.articleNumber || '',
      searchType: body.searchType,
      comment: body.comment || '',
      franchiseeId: '157358060',
      utmSource: body.utmSource || '',
      utmMedium: body.utmMedium || '',
      utmCampaign: body.utmCampaign || '',
      status: 'new',
    })

    await captureCustomerEvent(ctx, {
      event: 'parts_request_submitted',
      name: 'Заявка на подбор запчастей',
      contacts: [
        { type: ContactType.Phone, value: body.phone },
      ],
      customer: {
        displayName: body.name || 'Неизвестный',
        utm: {
          source: body.utmSource || '',
          medium: body.utmMedium || '',
          campaign: body.utmCampaign || '',
          content: '',
          term: '',
        },
      },
      linkRecords: [request],
      metricEventData: {
        action_param1: body.name,
        action_param2: body.phone,
        action_param3: body.searchType,
        action_param1_mapstrstr: {
          licensePlate: body.licensePlate || '',
          vin: body.vin || '',
          carBrand: body.carBrand || '',
          carModel: body.carModel || '',
          articleNumber: body.articleNumber || '',
        },
        uid: body.uid,
        utm_source: body.utmSource,
        utm_medium: body.utmMedium,
        utm_campaign: body.utmCampaign,
      },
    })

    await writeWorkspaceEvent(ctx, 'parts_request_created', {
      action: 'parts_request_created',
      action_param1: body.name,
      action_param2: body.phone,
      action_param3: body.searchType,
      action_param1_mapstrstr: {
        licensePlate: body.licensePlate || '',
        vin: body.vin || '',
        requestId: request.id,
      },
      customer_contacts: [{ type: 'phone', value: body.phone }],
      uid: body.uid,
      utm_source: body.utmSource,
      utm_medium: body.utmMedium,
      utm_campaign: body.utmCampaign,
    })

    const searchTypeLabels: Record<string, string> = {
      licensePlate: 'По госномеру',
      vin: 'По VIN',
      model: 'По марке/модели',
      article: 'По артикулу',
    }

    const details = [
      body.licensePlate && `Госномер: ${body.licensePlate}`,
      body.vin && `VIN: ${body.vin}`,
      body.carBrand && `Марка: ${body.carBrand}`,
      body.carModel && `Модель: ${body.carModel}`,
      body.articleNumber && `Артикул: ${body.articleNumber}`,
      body.comment && `Комментарий: ${body.comment}`,
    ].filter(Boolean).join('\n')

    const emailText = [
      `🔧 Новая заявка на подбор запчастей`,
      ``,
      `Имя: ${body.name || '—'}`,
      `Телефон: ${body.phone}`,
      `Тип подбора: ${searchTypeLabels[body.searchType] || body.searchType}`,
      details,
    ].filter(Boolean).join('\n')

    await sendNotificationToAccountOwners(ctx, {
      title: `Новая заявка на запчасти — ${body.name || body.phone}`,
      plain: emailText,
      md: emailText,
      html: emailText.replace(/\n/g, '<br>'),
    }).catch(e => ctx.account.log('Notify owners error', { level: 'warn', json: { err: String(e) } }))

    return { success: true, requestId: request.id }
  })
