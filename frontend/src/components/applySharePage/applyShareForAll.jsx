import { useState } from 'react';
import { Steps, Button, Divider } from '@arco-design/web-react';
import { IconLeft } from '@arco-design/web-react/icon';

import { Modal, Form, Message } from '@arco-design/web-react';

import "./css/appyIndividualShare.css"
import "./css/applyShareForAll.css"
import ApplyForm from './applyShareForAll/applyForm';

const Step = Steps.Step;

const ApplyShareForAll = ({applicableIssue}) => {
  const [current, setCurrent] = useState(1);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [, setFormValidated] = useState(false);
  const [shareApplied, setShareApplied] = useState(false)
  const [form] = Form.useForm();

  const list = applicableIssue.object;

  const applyShare = () => {
    form.validate()
        .then((res) => {
          setFormValidated(true)
          setConfirmLoading(true)
        })
        .then(() => {
          setShareApplied(true)
          setConfirmLoading(false);
          setCurrent(current + 1)
          Message.success('Success !');
        })
        .catch((error) => {
          setFormValidated(false)
          Message.error("All the fields are required!")
        });
  }

  const handleModalClose = () => {
    form.resetFields();
    setCurrent(1)
    setVisible(false)
    setFormValidated(false)
    setShareApplied(false)
    setConfirmLoading(false);
  }

  function renderContent(step) {
    return (
      <div
        style={{
          width: '450px',
          paddingRight: '10px',
          height: 272,
          background: 'var(--color-bg-2)',
          color: '#C2C7CC',
        }}>
        
        {
          step === 1? <ApplyForm form={form} list={list} /> : <h2>This is applying process</h2>
        }
      </div>
    );
  }

  return (
    <>
    <Button onClick={() => setVisible(true)} type='primary'>
      Appply Share
    </Button>
    <Modal
      title='Apply Share'
      visible={visible}
      style={{width: 'max-content'}}
      footer={
          <>
            <Button
            type='secondary'
            disabled={current <= 1}
            onClick={() => setCurrent(current - 1)}
            style={{ paddingLeft: 8 }}>
            <IconLeft />
            Back
            </Button>
            {
              !shareApplied?
              <Button
              disabled={current >= 2}
              onClick={() => {
                applyShare()
              }}
              type='primary'>
              Apply
            </Button>
            : <Button
              onClick={handleModalClose}
              type='primary'>
                Ok
              </Button>
            }
          </>
        }
      confirmLoading={confirmLoading}
      onCancel={() => setVisible(false)}>
        <div
        style={{
            display: 'flex',
            maxWidth: 780,
            padding: 0,
            background: 'var(--color-bg-2)'
          }} >
          <div
            style={{
              background: 'var(--color-bg-2)',
              padding: '10px 15px',
              height: 272,
              boxSizing: 'border-box',
            }}>
            <Steps direction='vertical' current={current} style={{ width: 170 }}>
              <Step title='Succeeded' description='This is a description' />
              <Step title='Processing' description='This is a description' />
            </Steps>
          </div>
          <Divider type='vertical' style={{ display: 'block', height: 'auto', margin: '0 20px 0 15px', background: 'white' }}/>
          {renderContent(current)}
        </div>
    </Modal>
    </>
  );
}

export default ApplyShareForAll;