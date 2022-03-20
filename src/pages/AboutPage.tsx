import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque explicabo recusandae eos quasi qui fugit veniam, error, dolorum voluptate dolorem rem! Similique suscipit autem deserunt cum reiciendis voluptatibus rem soluta!
      </p>
      <button className="btn blue-grey darken-3" onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </>
  )
}
