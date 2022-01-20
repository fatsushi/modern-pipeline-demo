import { Stack, StackProps, Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { FunctionStack } from "./function-stack";

export class ModernPipelinesDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "pipeline", {
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.connection(
          "fatsushi/modern-pipeline-demo",
          "main",
          {
            connectionArn:
              "arn:aws:codestar-connections:us-west-2:786032344772:connection/6841341b-6ffe-4817-84a6-c9b5a9b465ec",
          }
        ),
        commands: ["npm ci", "npm run build", "npm cdk synth"],
      }),
    });
    pipeline.addStage(new MyApplication(this, "lambda-deploy"));
  }
}

class MyApplication extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new FunctionStack(this, "myFunction");
  }
}
