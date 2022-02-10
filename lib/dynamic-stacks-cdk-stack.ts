import * as cdk from '@aws-cdk/core';
import { Construct } from 'constructs';
import {Service} from "./service";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as apigateway from "@aws-cdk/aws-apigateway";

export class DynamicStacksCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, service: Service, props?: cdk.StackProps) {
    super(scope, id, props);
    const api = new apigateway.RestApi(this, 'books-api');

    api.root.addMethod('ANY');

    const books = api.root.addResource('books');
    books.addMethod('GET');
    books.addMethod('POST');

  }
}
