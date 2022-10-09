import React from "react";
import style from "./AwsBlog.module.css";

const AwsBlog = () => {
  return (
    <div className={style.container}>
      <h1>What Is Amazon Web Services?</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
        alt="aws"
      />
      <p>
        Amazon Web Services or AWS as an abbreviation is a popular Cloud Service
        Provider that enables on-demand services like compute, storage,
        networking, security, databases, etc which can be accessed through the
        internet across the globe and the user is not required to manage or
        monitor these resources.
      </p>
      <br />
      <p>
        Amazon Web Services is a global leader in terms of Public Cloud market
        share and provides cloud solutions in 245 different countries across the
        globe. It provides more than 200 Cloud Computing services, which touch
        domains like,
      </p>
      <ul>
        <li>Storage</li>
        <li>Computation</li>
        <li>Security</li>
        <li>Databases</li>
        <li>Networking</li>
        <li>Monitoring</li>
        <li>Migration</li>
        <li>Messaging</li>
        <li>DevOps</li>
        <li>IoT</li>
        <li>Big Data, etc</li>
      </ul>
      <br />
      <p>
        Amazon Web Services (AWS) is a versatile, secure and reliable cloud
        service provider and is the most sort after Cloud Computing and Hard
        skill in the market. Companies have invested billions of dollars in this
        service provider and the number shows an upward trend in the near
        future. The major reason why see this the market reach of Amazon Web
        Services, the quality of services and support it provides and the
        benefits it offers.
      </p>
      <h2>Benefits of Amazon Web Services</h2>
      <p>
        Amazon Web Services(AWS) offers numerous benefits, let us explore a few
        of these ones by one:
      </p>
      <h5>AWS Pricing</h5>
      <p>
        Whether you are a small scale startup or a full-fledged enterprise,
        Amazon Web Services has you covered when it comes to pricing. Firstly it
        offers ‘pay as you go model’, that means you pay for resources in
        volumes and duration you use them for. It charges you on a per-minute
        basis. Meaning if a resource is used for 30 minutes you be charged only
        for those 30 minutes and not more. It also offers a calculator that lets
        you track your expenses.
      </p>
      <h5>Zero Commitment</h5>
      <p>
        Whether you need to host a website, or even a high traffic hosting
        content delivery network. Amazon Web Services keeps you covered. You
        spawn a virtual machine, a database service or a data warehouse. This
        happens with you not requiring to be in an upfront commitment. This is
        because Amazon Web Services charges you on per minute and for some
        resources per hour basis. This means you are not tied with any yearly,
        quarterly or even monthly commitments.
      </p>
      <h5>Scalability and Procurement</h5>
      <p>
        If your applications lie on-premise, procuring your servers may take a
        lot of time. It can be a few hours to even 1- weeks. This holds true for
        your software licenses. Amazon Web Services paints a very different
        picture when it comes to procurement. You can launch new virtual
        machines or instances in a matter of minutes and save a lot of time and
        effort.
      </p>
      <h5>Security</h5>
      <p>
        Amazon Web Services takes Cloud Security to the next level. It ensures
        your infrastructure is secure physically and also over the network, that
        consumers use to access it.
      </p>
      <ul>
        <li>
          It supports shared security model. This means the consumer can control
          security at the consumer end and AWS at data centre end.
        </li>
        <li>
          Physical security of data centre can be ensured by the fact that there
          is around the cloud physical security across all the data centres that
          Amazon Web Services owns
        </li>
        <li>
          Its Global infrastructure ensures your data is well distributed and
          accessible to you across the globe and is highly resilient, available
          and safe from disasters
        </li>
        <li>
          AWS provides firewalls to man your data at the entry points of the
          network and also ensures encryption of data that moves over the
          network, ensuring end to end security
        </li>
        <li>
          Amazon IAM is a service that lets you identify user who can access
          your resources and control who get to access what and when
        </li>
      </ul>
      <h5>API</h5>
      <p>
        API give us programmatic control over the resources we use. It comes to
        taking data backup, or even launching instances this all can be done
        API’s and in short, it gives us more power compared to AWS management
        console. AWS Supports plenty of API’s and SDK’s that let you have
        control over these resources. So this was about the benefits that AWS
        has to offer to us. Let us go ahead and take a look at some popular use
        cases.
      </p>
      <h2>Popular Customers of Amazon Web Services</h2>
      <ol>
        <li>McDonald’s</li>
        <li>Netflix</li>
        <li>Unilever</li>
        <li>Samsung</li>
        <li>MI</li>
        <li>Airbnb</li>
        <li>BMW</li>
        <li>ESPN</li>
      </ol>
    </div>
  );
};

export default AwsBlog;
