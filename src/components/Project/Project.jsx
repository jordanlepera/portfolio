// @flow
import * as React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

type Props = {
  test?: string,
}

const Project = (props: Props) => {
  const { test } = props
  const { t } = useTranslation()

  return (
    <div>
      {t("hello-world")}
      {test}
    </div>
  )
}

Project.defaultProps = {
  test: "",
}

Project.propTypes = {
  test: PropTypes.string,
}

export default Project
