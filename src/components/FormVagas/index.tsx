import { FormEvent, useState } from 'react'
import * as S from './style'
type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <S.Formulario onSubmit={aoEnviarForm}>
      <S.Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <S.Btn type="submit">Pesquisar</S.Btn>
    </S.Formulario>
  )
}
export default FormVagas
