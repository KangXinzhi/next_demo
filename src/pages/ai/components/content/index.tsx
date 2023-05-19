import React from 'react'

import classnames from 'classnames'
import { Spin } from 'antd'
import Step from '../step'
import { useContent } from '../contentProvider'
import Step1 from '../step1'
import Step2 from '../step2'
import Step3 from '../step3'

import styles from './index.module.css'

function CoolRadarChart() {
  const { step, isLoading } = useContent()

  return (
    <Spin spinning={isLoading} tip="正在进行评测，请等待" size="large">
      <div className={classnames([styles.container, { [styles.backgroundStep1]: step === 0, [styles.backgroundStep2]: step !== 0 }])}>
        <Step />
        <div className={styles.content}>
          {step === 0 && <Step1 />}
          {step === 1 && <Step2 />}
          {step === 2 && <Step3 />}
        </div>
      </div >
    </Spin>

  )
}

export default CoolRadarChart
