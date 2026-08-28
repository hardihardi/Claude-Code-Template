# Data Storage Management Skill

## Overview
This skill provides comprehensive guidance for implementing robust, scalable data storage solutions. It covers database selection, schema design, data persistence patterns, and best practices for managing data in production environments.

## Skill Navigation

### Core Sections
1. **System Architecture** - Understanding data storage layers and component interactions
2. **Database Selection** - Choosing appropriate database technologies
3. **Schema Design** - Creating efficient and maintainable data structures
4. **Data Persistence** - Implementing reliable data saving and retrieval
5. **Optimization** - Performance tuning and query optimization
6. **Security** - Protecting sensitive data and implementing access controls
7. **Backup & Recovery** - Ensuring data availability and disaster recovery

## Activation Triggers

This skill activates when users request:
- Database setup and configuration
- Data modeling and schema design
- Query optimization and performance tuning
- Data migration strategies
- Backup and recovery procedures
- Multi-tenant data architecture
- Time-series data handling
- Document storage solutions
- Cache implementation strategies
- Data consistency and transaction management

## Key Principles

### 1. Data Integrity
- Ensure consistency through ACID properties or eventual consistency patterns
- Validate data at entry points
- Maintain referential integrity

### 2. Performance
- Choose appropriate indexing strategies
- Implement caching layers
- Optimize query patterns
- Monitor and profile data access

### 3. Scalability
- Design for horizontal scaling
- Implement sharding strategies
- Plan for growth and capacity
- Use connection pooling

### 4. Security
- Encrypt sensitive data at rest and in transit
- Implement principle of least privilege
- Audit data access
- Comply with regulations (GDPR, HIPAA, etc.)

### 5. Maintainability
- Document schema changes
- Implement version control for migrations
- Create clear backup procedures
- Monitor system health

## Technology Stack Considerations

### Relational Databases (SQL)
- **Best for**: Structured data, ACID transactions, complex queries
- **Examples**: PostgreSQL, MySQL, MariaDB, SQL Server
- **Trade-offs**: Scaling challenges, schema rigidity

### NoSQL Databases
- **Document Stores**: MongoDB, CouchDB, Firebase
- **Key-Value Stores**: Redis, Memcached, DynamoDB
- **Column Stores**: Cassandra, HBase
- **Graph Databases**: Neo4j, ArangoDB

### Time-Series Databases
- InfluxDB, Prometheus, TimescaleDB
- Optimized for metrics and temporal data

### Search Engines
- Elasticsearch, Solr, Meilisearch
- Full-text search and analytics

## Workflow

```
Request Analysis
    ↓
Database Assessment
    ↓
Schema Design/Review
    ↓
Implementation Pattern
    ↓
Optimization & Testing
    ↓
Deployment & Monitoring
```

## Output Conventions

All responses follow the template structure defined in `template.md` and include:
- Specific technology recommendations with rationale
- SQL/NoSQL code examples
- Migration strategies
- Performance considerations
- Security implementations

## Reference Materials
- Technical documentation: `reference.md`
- Usage examples: `examples.md`
- Extended examples: `examples/` directory
- Validation scripts: `scripts/validate.py`
- Helper utilities: `scripts/helper.py`
