import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class FunctionStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "myFunction", {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: "app.lambda_handler",
      functionName: "hello-cdk-pipeline",
      code: lambda.Code.fromAsset("./my_function"),
    });
  }
}
