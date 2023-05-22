

const Blogs = () => {
    return (
        <div>
            <div className='mx-14 mt-4 font-exo bg-slate-200 '>
                <h3 className=' font-semibold px-4 mt-4'>01. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='px-4'>Answer: An access token and refresh token are commonly used in authentication and authorization systems. Heres a brief explanation of what they are and how they work: <br />

                    Access Token: <br />
                    1. An access token is a credential that is used to access protected resources on a server. <br />
                    2. It is typically issued to a client (such as a web application or mobile app) by an authentication server after the client successfully authenticates with valid credentials. <br />
                    3. The access token is included in each request to the server to prove the clients identity and permissions. <br />
                    4. It has a limited lifespan and expires after a certain period, after which it becomes invalid. <br />
                    Refresh Token: <br />
                    1. A refresh token is a credential that is used to obtain a new access token without re-authenticating the client. <br />
                    2. It is typically issued alongside the access token by the authentication server during the initial authentication process. <br />
                    3. The refresh token is securely stored on the client-side (more on this below) and is used to request a new access token once the current access token expires. <br />
                    4. Refresh tokens have a longer lifespan compared to access tokens and can be revoked or invalidated by the authentication server if compromised or no longer needed. <br />
                </p>
                <h3 className=' font-semibold px-4 mt-4'>02.Compare SQL and NoSQL databases?</h3>
                <p className='px-4'>Answer : SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems with distinct characteristics. Heres a brief comparison of SQL and NoSQL databases: <br />

                    SQL Databases: <br />
                    1. Relational database management systems (RDBMS) that use structured tables with predefined schemas. <br />
                    2. Data is organized into rows, columns, and tables, following a fixed schema. <br />
                    3. SQL databases enforce data integrity through the use of constraints and relationships (e.g., foreign keys). <br />
                    4. Supports ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data reliability and consistency. <br />
                    NoSQL Databases: <br />

                    1. Non-relational databases that provide flexible and schema-less data models. <br />
                    2. Data is stored in various formats like key-value pairs, documents, column families, or graphs. <br />
                    3. NoSQL databases prioritize scalability, performance, and horizontal scaling (adding more servers). <br />
                    4. Lack of fixed schema allows for agile development and easier handling of evolving data structures. <br />

                </p>
                <h3 className=' font-semibold px-4 mt-4'>03. What is express js? What is Nest JS (google it)? </h3>
                <p className='px-4'>Answer: NExpress.js is a minimalist and flexible web application framework for Node.js, providing routing, middleware support, and template rendering. <br />

                    It offers a straightforward approach to building web applications and APIs, making it popular for smaller projects and developers seeking customization. Nest.js, built on top of Express.js, is a progressive and opinionated framework for Node.js.
                    <br />
                    It enhances Express.js with additional features, a structured architectural approach, and built-in support for modules, decorators, and dependency injection. Nest.js is suitable for larger-scale applications, enterprise-grade projects, and microservices architectures, promoting code reusability, testability, and scalability.
                </p>
                <h3 className=' font-semibold px-4 mt-4'>04. What is MongoDB aggregate and how does it work ?</h3>
                <p className='px-4'>Answer: In MongoDB, the aggregate function is used to perform advanced data processing and analysis operations on the data stored in a collection. It allows you to execute complex queries, transformations, aggregations, and computations on the data. <br />

                    The aggregate function works by processing the data through a pipeline of stages. Each stage in the pipeline performs a specific operation on the data, such as filtering, grouping, projecting, sorting, or computing aggregations. <br />


                    The pipeline stages are applied sequentially, and the output of each stage becomes the input for the next stage in the pipeline. This allows you to perform multi-stage operations and create powerful data transformations. <br />

                    The aggregate function takes an array of pipeline stages as an argument, where each stage is an object specifying the operation to perform. Some commonly used stages include:

                    1. $match: Filters the documents based on specified conditions. <br />
                    2. $group: Groups the documents by a specific field and performs aggregations on the grouped data. <br />
                    3. $project: Reshapes the documents, allowing you to include, exclude, or modify fields. <br />
                    4. $sort: Sorts the documents based on specified criteria. <br />
                    5. $limit: Limits the number of documents in the output. 
                </p>
            </div>
        </div>
    );
};

export default Blogs;