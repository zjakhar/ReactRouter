import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import CerealInformation from "./CerealInformation"

const CerealShowContainer = (props) => {
  const [cereal, setCereal] = useState({})

  useEffect(() => {
    fetch(`/api/v1/cereals/${cerealId}`)
      .then(response => response.json())
      .then(fetchedCereal => {
        setCereal(fetchedCereal)
      })
    }, [])

    let cerealId = props.match.params.id
    fetch(`/api/v1/cereals/${cerealId}`)

  return (<CerealInformation cereal={cereal} />)
}

export default CerealShowContainer
