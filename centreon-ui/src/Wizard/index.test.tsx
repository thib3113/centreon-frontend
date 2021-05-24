import * as React from 'react';

import {
  render,
  fireEvent,
  waitFor,
  screen,
  RenderResult,
} from '@testing-library/react';
import * as Yup from 'yup';

import { StepComponentProps } from './models';

import Wizard from '.';

const renderWizardThreeSteps = (): RenderResult =>
  render(
    <Wizard
      open
      steps={[
        {
          Component: () => <div>Step 1</div>,
          skipFormChangeCheck: true,
          stepName: 'step label 1',
        },
        {
          Component: () => <div>Step 2</div>,
          skipFormChangeCheck: true,
          stepName: 'step label 2',
        },
        {
          Component: () => <div>Step 3</div>,
          skipFormChangeCheck: true,
          stepName: 'step label 3',
        },
      ]}
    />,
  );

const renderWizardOneStep = (): RenderResult =>
  render(
    <Wizard
      open
      steps={[
        {
          Component: () => <div>Step 1</div>,
          skipFormChangeCheck: true,
          stepName: 'step label 1',
        },
      ]}
    />,
  );

const secondStepValidationSchema = Yup.object().shape({
  secondInput: Yup.string().required('Required'),
});

const renderWizardTwoStepsWithFormValidation = () =>
  render(
    <Wizard
      open
      initialValues={{ secondInput: '' }}
      steps={[
        {
          Component: () => <div>Step 1</div>,
          skipFormChangeCheck: true,
          stepName: 'step label 1',
        },
        {
          Component: () => <div>Step 2</div>,
          skipFormChangeCheck: true,
          stepName: 'step label 2',
          validationSchema: secondStepValidationSchema,
        },
      ]}
    />,
  );

const SecondStep = ({ disableNextOnSendingRequests }: StepComponentProps) => {
  const finishRequests = () => {
    disableNextOnSendingRequests([false, false, false]);
  };

  React.useEffect(() => {
    disableNextOnSendingRequests([true, false, true]);
  }, []);

  return (
    <button type="button" onClick={finishRequests}>
      Finish requests
    </button>
  );
};

const renderWizardTwoStepsWithSendingRequests = () =>
  render(
    <Wizard
      open
      steps={[
        {
          Component: () => <div>Step 1</div>,
          skipFormChangeCheck: true,
          stepName: 'step label 1',
        },
        {
          Component: SecondStep,
          skipFormChangeCheck: true,
          stepName: 'step label 2',
        },
      ]}
    />,
  );

describe(Wizard, () => {
  it('displays the step labels', () => {
    renderWizardThreeSteps();

    expect(screen.getByText('step label 1')).toBeInTheDocument();
    expect(screen.getByText('step label 2')).toBeInTheDocument();
    expect(screen.getByText('step label 3')).toBeInTheDocument();
  });

  it('does not display the step labels when there is only one step', () => {
    renderWizardOneStep();

    expect(screen.queryByText('step label 1')).not.toBeInTheDocument();
  });

  it('navigates between steps', async () => {
    renderWizardThreeSteps();

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('Step 2')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Previous'));

    await waitFor(() => {
      expect(screen.getByText('Step 1')).toBeInTheDocument();
    });
  });

  it('cannot finish the wizard when there is a validation error, but can change steps', async () => {
    renderWizardTwoStepsWithFormValidation();

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByLabelText('Finish')).toHaveAttribute('disabled');
    });

    fireEvent.click(screen.getByText('Previous'));

    await waitFor(() => {
      expect(screen.getByText('Step 1')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByText('Step 2')).toBeInTheDocument();
    });
  });

  it('cannot finish the wizard while the step is sending requests', async () => {
    renderWizardTwoStepsWithSendingRequests();

    fireEvent.click(screen.getByText('Next'));

    await waitFor(() => {
      expect(screen.getByLabelText('Finish')).toHaveAttribute('disabled');
    });

    fireEvent.click(screen.getByText('Finish requests'));

    expect(screen.getByLabelText('Finish')).not.toHaveAttribute('disabled');
  });
});
