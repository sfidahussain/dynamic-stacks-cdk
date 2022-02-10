#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DynamicStacksCdkStack } from '../lib/dynamic-stacks-cdk-stack';
import app from '../app.json';

const envUSA = {account: '676445216926', region: 'us-east-1' };
const cdkApp = new cdk.App();

app.services.forEach(service => {
    new DynamicStacksCdkStack(cdkApp, service.name, service,{
        env: envUSA
    });
});
