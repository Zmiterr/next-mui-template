import { Stack, styled, Typography } from '@mui/material'
import React, {
  ChangeEvent,
  ClipboardEvent,
  createRef,
  InputHTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CodeInputWrapper = styled(Stack, { name: 'codeInputWrapper' })(({ theme }) => ({
  '.code_symbol': {
    width: '75px',
    height: '90px',
    background: theme.palette.neutrals.darkGrey_02,
    border: '2px solid',
    borderColor: theme.palette.neutrals.darkGrey_02,
    borderRadius: '8px',
    padding: 0,
    textAlign: 'center',
    outline: 0,
    '&:focus': {
      background: theme.palette.neutrals.black,
      borderColor: theme.palette.neutrals.grey,
    },
  },
}))

export type CodeInputProps = {
  autoFocus?: boolean
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  length?: number
  onChange?: (data: string) => void
  onCompleted?: (data: string) => void
  placeholder?: string
  value?: string
}

const validate = (input: string) => {
  return /^\d/.test(input)
}

const fillValues = (value: string, inputLength: number) =>
  new Array(inputLength).fill('').map((_, index) => value[index] ?? '')

const CodeInput = ({
  autoFocus = false,
  inputProps,
  length = 6,
  onChange = () => null,
  onCompleted = () => null,
  placeholder = '',
  value: defaultValue = '',
}: CodeInputProps) => {
  const [values, setValues] = useState(fillValues(defaultValue, length))
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const inputsRefs = useMemo(
    () => new Array(length).fill(null).map(() => createRef<HTMLInputElement>()),
    [length],
  )

  const selectInputContent = (index: number) => {
    const input = inputsRefs[index].current

    if (input) {
      requestAnimationFrame(() => {
        input.select()
      })
    }
  }

  const setValue = (value: string, index: number) => {
    const nextValues = [...values]

    nextValues[index] = value

    setValues(nextValues)

    const stringifiedValues = nextValues.join('')
    const isCompleted = stringifiedValues.length === length

    if (isCompleted) {
      onCompleted(stringifiedValues)

      return
    }

    onChange(stringifiedValues)
  }

  const focusInput = useCallback(
    (index: number) => {
      const input = inputsRefs[index]?.current

      if (input) {
        requestAnimationFrame(() => {
          input.focus()
        })
      }
    },
    [inputsRefs],
  )

  const blurInput = (index: number) => {
    const input = inputsRefs[index]?.current

    if (input) {
      requestAnimationFrame(() => {
        input.blur()
      })
    }
  }

  const onInputFocus = (index: number) => {
    const input = inputsRefs[index]?.current

    if (input) {
      setFocusedIndex(index)
      selectInputContent(index)
    }
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const eventValue = event.target.value
    const value = eventValue.replace(values[index], '')

    if (!validate(value)) {
      selectInputContent(index)

      return
    }

    if (value.length > 1) {
      setValues(fillValues(eventValue, length))

      const isCompleted = eventValue.length === length

      if (isCompleted) {
        onCompleted(eventValue)
        blurInput(index)

        return
      }

      return
    }

    setValue(value, index)

    if (index === length - 1) {
      blurInput(index)

      return
    }

    focusInput(index + 1)
  }

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    const eventKey = event.key

    if (eventKey === 'Backspace' || eventKey === 'Delete') {
      event.preventDefault()

      setValue('', focusedIndex)
      focusInput(index - 1)

      return
    }

    if (eventKey === values[index]) {
      focusInput(index + 1)
    }
  }

  const onInputPaste = (event: ClipboardEvent<HTMLInputElement>, index: number) => {
    event.preventDefault()

    const pastedValue = event.clipboardData.getData('text')
    const nextValues = pastedValue.slice(0, length)

    if (!validate(nextValues)) {
      return
    }

    setValues(fillValues(nextValues, length))

    const isCompleted = nextValues.length === length

    if (isCompleted) {
      onCompleted(nextValues)
      blurInput(index)

      return
    }

    focusInput(nextValues.length)
  }

  useEffect(() => {
    if (autoFocus) {
      focusInput(0)
    }
  }, [autoFocus, focusInput])

  return (
    <CodeInputWrapper direction={'row'} gap={'4px'}>
      {inputsRefs.map((ref, i) => (
        <Typography variant={'h3'} color={'neutrals.lightGrey_01'} key={i}>
          <input
            autoComplete="one-time-code"
            className="code_symbol"
            onChange={(event) => onInputChange(event, i)}
            onFocus={() => onInputFocus(i)}
            onKeyDown={(event) => onInputKeyDown(event, i)}
            onPaste={(event) => onInputPaste(event, i)}
            placeholder={placeholder}
            ref={ref}
            value={values[i]}
            {...inputProps}
          />
        </Typography>
      ))}
    </CodeInputWrapper>
  )
}

export default CodeInput
