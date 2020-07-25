// @flow
import React from "react"
import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation()

  return <div>{t("page-not-found")}</div>
}

export default NotFound
