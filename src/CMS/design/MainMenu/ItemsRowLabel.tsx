'use client'

import type { MainMenu } from '@payload-types'
import { useRowLabel } from '@payloadcms/ui'

import type { PayloadClientReactComponent, RowLabelComponent } from 'payload'

export const ItemsRowLabel: PayloadClientReactComponent<
  RowLabelComponent
> = () => {
  const { data } =
    useRowLabel<
      NonNullable<NonNullable<MainMenu['tabs']>[number]['items']>[number]
    >()

  if (data?.style === 'default') {
    return data?.defaultLink?.link.label
  }
  if (data?.style === 'featured') {
    return data?.ftrdLink?.tag
  }
  if (data?.style === 'list') {
    return data?.listLinks?.tag
  }
}
