import React from 'react';

const Blog = () => {
    return (
        <div>
           
            <div className ="p-5">
            <div className="text-center mt-3">
                <h1>Difference between `javascript` and `nodejs`?</h1>
                <p className="bg-info p-3 my-3">Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS. Javascript is basically used on the client-side. NodeJS is mostly used on the server-side. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</p>
            </div>
            <div className="text-center">
                <h1>When should you use `nodejs` and when should you use `mongodb`?</h1>
                <p className="bg-info p-3 my-3">MongoDB is a database. It is mainly store data in the database. If you need to store data or need to CRUD(create,Read,Update,Delete) then you should use MongoDB. You can store data in json format. MongoDB is a NoSQL DBMS, usually people prefer mongoDB for following reasons: NoSQL Database Management Systems are more flexible than RDBMS. It holds a set of collections and stores data as document. It offers a MongoDB Node.js Driver which provides a JavaScript API and implements the network protocol required to read and write from a local or remote MongoDB database

                NodeJs is a javascript runtime engine. It is mainly work as intermediary between database and client side. it has API that is able to run mongodb. Node.js is an open source server environment which uses JavaScript on the server to develop backend applications.Accepting the request from frontend server, searching the data from database and sending back the response to client’s browser is done by backend application </p>
            </div>
            <div className="text-center">
                <h1>Differences between `sql` and `nosql` databases?</h1>
                <p className="bg-info my-3 p-3">SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
            </div>
            <div className="text-center">
                <h1>What is the purpose of `jwt` and how does it work?</h1>
                <p className="bg-info my-3 p-3">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                Once decoded, you will get two JSON strings:
                The header and the payload.
                The signature. In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.
                When the authorization is granted, the authorization server returns an access token to the application.
                The application uses the access token to access a protected resource (like an API).</p>
            </div>

            </div>
        </div>
    );
};

export default Blog;