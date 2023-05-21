const Blogs = () => {
  return (
    <div className="wrapper  text-gray-800 md:px-10">
      <h2 className="text-2xl  font-bold m-10 bg-amber-300 w-fit mx-auto rounded-md text-center">
        Questions and Answers
      </h2>
      <ul className="divide-y divide-gray-400">
        <li className="p-4  bg-amber-100 rounded-md">
          <h3 className="text-lg font-semibold bg-amber-200 w-fit rounded-sm">
          What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h3>
          <p className="mt-2">
          An access token is a credential used for authentication and authorization in applications or APIs. It contains user information and permissions and is typically short-lived. It allows access to protected resources or authorized actions. A refresh token, on the other hand, is a long-lived credential used to obtain a new access token when the current one expires. Refresh tokens are securely stored on the client-side and sent to the server for token refresh. Access tokens are commonly stored in browser memory or secure HTTP-only cookies, while refresh tokens are typically stored as HTTP-only cookies. It is important to follow security best practices when storing and managing these tokens on the client-side.
          </p>
          <br />
        </li>
        <li className="p-4  bg-amber-50 rounded-md">
          <h3 className="text-lg font-semibold bg-amber-200 w-fit rounded-sm">
          Compare SQL and NoSQL databases?
          </h3>
          <p className="mt-2">
          SQL (Structured Query Language) databases and NoSQL (Not Only SQL) databases differ in their data models and characteristics. SQL databases are based on a fixed schema and use tables with predefined relationships to store structured data. They ensure data integrity and support complex queries using SQL. In contrast, NoSQL databases provide flexible schemas and can handle unstructured or semi-structured data in various formats like key-value pairs, documents, or graphs. They prioritize scalability, performance, and horizontal scaling. NoSQL databases use different query languages specific to their data model. The choice between SQL and NoSQL depends on factors like data structure, scalability requirements, and the nature of the application.
          <br />
          </p>
        </li>
        <li className="p-4  bg-amber-100 rounded-md">
          <h3 className="text-lg font-semibold bg-amber-200 w-fit rounded-sm">
          What is express js? What is Nest JS?
          </h3>
          <p className="mt-2">
          Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple API for handling HTTP requests, routing, and middleware, allowing developers to have control over the application's structure. Nest.js, on the other hand, is a progressive framework built on top of Express.js, offering additional structure, modularity, and features such as modules, controllers, and services. It leverages TypeScript's capabilities and integrates well with various libraries. Nest.js is designed for building scalable, TypeScript-based server-side applications with complex business logic, while Express.js is more lightweight and suitable for smaller applications or APIs that prioritize customization. The choice between the two depends on the specific requirements and preferences of the project.
            <br />
          </p>
        </li>
        <li className="p-4  bg-amber-50 rounded-md">
          <h3 className="text-lg font-semibold bg-amber-200  w-fit rounded-sm">
          What is MongoDB aggregate and how does it work ?
          </h3>
          <p>
          In MongoDB, the aggregate operation is used to perform advanced data aggregation tasks on collections. It works by defining a pipeline of stages, each representing a specific operation like filtering, grouping, sorting, or projecting. The documents flow through these stages sequentially, with each stage operating on the output of the previous stage. The pipeline stages can be chained together to perform complex aggregation operations. The aggregate operation is powerful and efficient, allowing you to process and transform data within the database and retrieve aggregated results based on the specified pipeline. It is commonly used for advanced queries, data transformations, and generating customized reports in MongoDB.
          </p>{" "}
          <br />
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
