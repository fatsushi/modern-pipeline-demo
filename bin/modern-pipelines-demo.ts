#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ModernPipelinesDemoStack } from "../lib/modern-pipelines-demo-stack";

const app = new cdk.App();
new ModernPipelinesDemoStack(app, "ModernPipelinesDemoStack", {});
