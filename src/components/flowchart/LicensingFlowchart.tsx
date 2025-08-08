'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, User, Award, Building } from 'lucide-react';

interface FlowchartStep {
  id: string;
  title: string;
  description: string;
  duration?: string;
  requirements?: string[];
  nextSteps?: string[];
  isComplete?: boolean;
}

interface LicensingFlowchartProps {
  state: string;
  steps: FlowchartStep[];
  title?: string;
}

export default function LicensingFlowchart({ state, steps, title }: LicensingFlowchartProps) {
  const [currentStep, setCurrentStep] = useState<string>(steps[0]?.id || '');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const markStepComplete = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const getCurrentStepData = () => steps.find(step => step.id === currentStep);
  const currentStepData = getCurrentStepData();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">
          {title || `${state} Licensing Pathway`}
        </h3>
        <p className="text-muted-foreground">
          Interactive guide to your real estate licensing journey
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <button
              onClick={() => setCurrentStep(step.id)}
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
                currentStep === step.id
                  ? 'bg-primary border-primary text-primary-foreground'
                  : completedSteps.has(step.id)
                  ? 'bg-green-600 border-green-600 text-white'
                  : 'border-muted bg-background text-muted-foreground hover:border-primary'
              }`}
            >
              {completedSteps.has(step.id) ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <span className="text-xs font-bold">{index + 1}</span>
              )}
            </button>
            {index < steps.length - 1 && (
              <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
            )}
          </div>
        ))}
      </div>

      {/* Current Step Details */}
      {currentStepData && (
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                {currentStepData.id === 'education' && <Building className="mr-2 h-5 w-5" />}
                {currentStepData.id === 'application' && <User className="mr-2 h-5 w-5" />}
                {currentStepData.id === 'license' && <Award className="mr-2 h-5 w-5" />}
                {currentStepData.title}
              </span>
              <Badge variant={completedSteps.has(currentStepData.id) ? 'default' : 'secondary'}>
                {completedSteps.has(currentStepData.id) ? 'Complete' : 'In Progress'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">{currentStepData.description}</p>

            {currentStepData.duration && (
              <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Expected Duration</h4>
                <p className="text-sm">{currentStepData.duration}</p>
              </div>
            )}

            {currentStepData.requirements && currentStepData.requirements.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {currentStepData.requirements.map((req, index) => (
                    <li key={index} className="text-sm">{req}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => markStepComplete(currentStepData.id)}
                variant={completedSteps.has(currentStepData.id) ? 'outline' : 'default'}
                size="sm"
              >
                {completedSteps.has(currentStepData.id) ? 'Mark Incomplete' : 'Mark Complete'}
              </Button>
              
              {currentStepData.nextSteps && currentStepData.nextSteps.length > 0 && (
                <Button
                  onClick={() => {
                    const nextStepId = currentStepData.nextSteps![0];
                    setCurrentStep(nextStepId);
                  }}
                  variant="outline"
                  size="sm"
                  disabled={!completedSteps.has(currentStepData.id)}
                >
                  Next Step
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step Navigation */}
      <div className="grid md:grid-cols-3 gap-3">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(step.id)}
            className={`p-3 text-left border rounded-lg transition-colors ${
              currentStep === step.id
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-sm">{step.title}</h4>
              {completedSteps.has(step.id) && (
                <CheckCircle className="h-4 w-4 text-green-600" />
              )}
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {step.description}
            </p>
          </button>
        ))}
      </div>

      {/* Completion Summary */}
      {completedSteps.size === steps.length && (
        <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
            Congratulations!
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            You've completed all steps in the {state} licensing pathway. 
            You're now ready to start your real estate career!
          </p>
          <Badge className="bg-green-600">Licensing Complete</Badge>
        </div>
      )}
    </div>
  );
}