/* Copyright (c) 2019, Amazon Web Services, Inc */

const cdk = require('@aws-cdk/core');
const ec2 = require('@aws-cdk/aws-ec2');
const ecs = require('@aws-cdk/aws-ecs');
const ecr = require('@aws-cdk/aws-ecr');
const ecsPatterns = require('@aws-cdk/aws-ecs-patterns');

class FamousPeepsStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // network to run in
    const fpVpc = new ec2.Vpc(this, 'famousPeepsDemoVpc', {
      maxAZs: 2, natGateways: 1
    });

    // ecs cluster
    const fpCluster = new ecs.Cluster(this, "famousPeepsDemoCluster", {
      vpc: fpVpc
    });

    // ecr repository
    // @todo tag immutability and scan on push options? 
    const fpRepo = new ecr.Repository(this, "famousPeepsRepo", {
      removalPolicy: "destroy"
    });

    // fargate app load balanced service
    /*const fpService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, "famousPeepsDemoService", {
      cluster: fpCluster, cpu: 256, desiredCount: 1, memoryLimitMiB: 512, publicLoadBalancer: true, taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample")
      }
    });*/
  }
}

const app = new cdk.App();
new FamousPeepsStack(app, 'famousPeepsStack');