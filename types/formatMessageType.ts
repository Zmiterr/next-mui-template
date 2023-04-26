import { FormatXMLElementFn, Options } from 'intl-messageformat'
import { MessageDescriptor, PrimitiveType } from 'react-intl'

export interface FormatMessage {
  (
    descriptor: MessageDescriptor,
    values?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>,
    opts?: Options,
  ): string
  <T extends React.ReactNode>(
    descriptor: MessageDescriptor,
    values?: Record<string, PrimitiveType | FormatXMLElementFn<T> | T>,
    opts?: Options,
  ): string | (string | T)[] | T
}
