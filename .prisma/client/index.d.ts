
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model auth_keys
 * 
 */
export type auth_keys = $Result.DefaultSelection<Prisma.$auth_keysPayload>
/**
 * Model oauth_clients
 * 
 */
export type oauth_clients = $Result.DefaultSelection<Prisma.$oauth_clientsPayload>
/**
 * Model oauth_users
 * 
 */
export type oauth_users = $Result.DefaultSelection<Prisma.$oauth_usersPayload>
/**
 * Model refresh_tokens
 * 
 */
export type refresh_tokens = $Result.DefaultSelection<Prisma.$refresh_tokensPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model programari
 * 
 */
export type programari = $Result.DefaultSelection<Prisma.$programariPayload>
/**
 * Model medic_info
 * 
 */
export type medic_info = $Result.DefaultSelection<Prisma.$medic_infoPayload>
/**
 * Model specialitati
 * 
 */
export type specialitati = $Result.DefaultSelection<Prisma.$specialitatiPayload>
/**
 * Model program_lucru
 * 
 */
export type program_lucru = $Result.DefaultSelection<Prisma.$program_lucruPayload>
/**
 * Model user_logs
 * 
 */
export type user_logs = $Result.DefaultSelection<Prisma.$user_logsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auth_keys
 * const auth_keys = await prisma.auth_keys.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auth_keys
   * const auth_keys = await prisma.auth_keys.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.auth_keys`: Exposes CRUD operations for the **auth_keys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_keys
    * const auth_keys = await prisma.auth_keys.findMany()
    * ```
    */
  get auth_keys(): Prisma.auth_keysDelegate<ExtArgs>;

  /**
   * `prisma.oauth_clients`: Exposes CRUD operations for the **oauth_clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Oauth_clients
    * const oauth_clients = await prisma.oauth_clients.findMany()
    * ```
    */
  get oauth_clients(): Prisma.oauth_clientsDelegate<ExtArgs>;

  /**
   * `prisma.oauth_users`: Exposes CRUD operations for the **oauth_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Oauth_users
    * const oauth_users = await prisma.oauth_users.findMany()
    * ```
    */
  get oauth_users(): Prisma.oauth_usersDelegate<ExtArgs>;

  /**
   * `prisma.refresh_tokens`: Exposes CRUD operations for the **refresh_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refresh_tokens
    * const refresh_tokens = await prisma.refresh_tokens.findMany()
    * ```
    */
  get refresh_tokens(): Prisma.refresh_tokensDelegate<ExtArgs>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.programari`: Exposes CRUD operations for the **programari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programaris
    * const programaris = await prisma.programari.findMany()
    * ```
    */
  get programari(): Prisma.programariDelegate<ExtArgs>;

  /**
   * `prisma.medic_info`: Exposes CRUD operations for the **medic_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medic_infos
    * const medic_infos = await prisma.medic_info.findMany()
    * ```
    */
  get medic_info(): Prisma.medic_infoDelegate<ExtArgs>;

  /**
   * `prisma.specialitati`: Exposes CRUD operations for the **specialitati** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialitatis
    * const specialitatis = await prisma.specialitati.findMany()
    * ```
    */
  get specialitati(): Prisma.specialitatiDelegate<ExtArgs>;

  /**
   * `prisma.program_lucru`: Exposes CRUD operations for the **program_lucru** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Program_lucrus
    * const program_lucrus = await prisma.program_lucru.findMany()
    * ```
    */
  get program_lucru(): Prisma.program_lucruDelegate<ExtArgs>;

  /**
   * `prisma.user_logs`: Exposes CRUD operations for the **user_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_logs
    * const user_logs = await prisma.user_logs.findMany()
    * ```
    */
  get user_logs(): Prisma.user_logsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    auth_keys: 'auth_keys',
    oauth_clients: 'oauth_clients',
    oauth_users: 'oauth_users',
    refresh_tokens: 'refresh_tokens',
    sessions: 'sessions',
    users: 'users',
    programari: 'programari',
    medic_info: 'medic_info',
    specialitati: 'specialitati',
    program_lucru: 'program_lucru',
    user_logs: 'user_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "auth_keys" | "oauth_clients" | "oauth_users" | "refresh_tokens" | "sessions" | "users" | "programari" | "medic_info" | "specialitati" | "program_lucru" | "user_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      auth_keys: {
        payload: Prisma.$auth_keysPayload<ExtArgs>
        fields: Prisma.auth_keysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_keysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_keysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>
          }
          findFirst: {
            args: Prisma.auth_keysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_keysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>
          }
          findMany: {
            args: Prisma.auth_keysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>[]
          }
          create: {
            args: Prisma.auth_keysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>
          }
          createMany: {
            args: Prisma.auth_keysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_keysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>[]
          }
          delete: {
            args: Prisma.auth_keysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>
          }
          update: {
            args: Prisma.auth_keysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>
          }
          deleteMany: {
            args: Prisma.auth_keysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_keysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.auth_keysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_keysPayload>
          }
          aggregate: {
            args: Prisma.Auth_keysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_keys>
          }
          groupBy: {
            args: Prisma.auth_keysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_keysGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_keysCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_keysCountAggregateOutputType> | number
          }
        }
      }
      oauth_clients: {
        payload: Prisma.$oauth_clientsPayload<ExtArgs>
        fields: Prisma.oauth_clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.oauth_clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.oauth_clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>
          }
          findFirst: {
            args: Prisma.oauth_clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.oauth_clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>
          }
          findMany: {
            args: Prisma.oauth_clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>[]
          }
          create: {
            args: Prisma.oauth_clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>
          }
          createMany: {
            args: Prisma.oauth_clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.oauth_clientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>[]
          }
          delete: {
            args: Prisma.oauth_clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>
          }
          update: {
            args: Prisma.oauth_clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>
          }
          deleteMany: {
            args: Prisma.oauth_clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.oauth_clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.oauth_clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_clientsPayload>
          }
          aggregate: {
            args: Prisma.Oauth_clientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOauth_clients>
          }
          groupBy: {
            args: Prisma.oauth_clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Oauth_clientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.oauth_clientsCountArgs<ExtArgs>
            result: $Utils.Optional<Oauth_clientsCountAggregateOutputType> | number
          }
        }
      }
      oauth_users: {
        payload: Prisma.$oauth_usersPayload<ExtArgs>
        fields: Prisma.oauth_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.oauth_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.oauth_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>
          }
          findFirst: {
            args: Prisma.oauth_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.oauth_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>
          }
          findMany: {
            args: Prisma.oauth_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>[]
          }
          create: {
            args: Prisma.oauth_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>
          }
          createMany: {
            args: Prisma.oauth_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.oauth_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>[]
          }
          delete: {
            args: Prisma.oauth_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>
          }
          update: {
            args: Prisma.oauth_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>
          }
          deleteMany: {
            args: Prisma.oauth_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.oauth_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.oauth_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$oauth_usersPayload>
          }
          aggregate: {
            args: Prisma.Oauth_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOauth_users>
          }
          groupBy: {
            args: Prisma.oauth_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Oauth_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.oauth_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Oauth_usersCountAggregateOutputType> | number
          }
        }
      }
      refresh_tokens: {
        payload: Prisma.$refresh_tokensPayload<ExtArgs>
        fields: Prisma.refresh_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refresh_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refresh_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          findFirst: {
            args: Prisma.refresh_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refresh_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          findMany: {
            args: Prisma.refresh_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[]
          }
          create: {
            args: Prisma.refresh_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          createMany: {
            args: Prisma.refresh_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.refresh_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[]
          }
          delete: {
            args: Prisma.refresh_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          update: {
            args: Prisma.refresh_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          deleteMany: {
            args: Prisma.refresh_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refresh_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refresh_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          aggregate: {
            args: Prisma.Refresh_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefresh_tokens>
          }
          groupBy: {
            args: Prisma.refresh_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.refresh_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokensCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      programari: {
        payload: Prisma.$programariPayload<ExtArgs>
        fields: Prisma.programariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.programariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.programariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>
          }
          findFirst: {
            args: Prisma.programariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.programariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>
          }
          findMany: {
            args: Prisma.programariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>[]
          }
          create: {
            args: Prisma.programariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>
          }
          createMany: {
            args: Prisma.programariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.programariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>[]
          }
          delete: {
            args: Prisma.programariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>
          }
          update: {
            args: Prisma.programariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>
          }
          deleteMany: {
            args: Prisma.programariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.programariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.programariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programariPayload>
          }
          aggregate: {
            args: Prisma.ProgramariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramari>
          }
          groupBy: {
            args: Prisma.programariGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramariGroupByOutputType>[]
          }
          count: {
            args: Prisma.programariCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramariCountAggregateOutputType> | number
          }
        }
      }
      medic_info: {
        payload: Prisma.$medic_infoPayload<ExtArgs>
        fields: Prisma.medic_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medic_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medic_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>
          }
          findFirst: {
            args: Prisma.medic_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medic_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>
          }
          findMany: {
            args: Prisma.medic_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>[]
          }
          create: {
            args: Prisma.medic_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>
          }
          createMany: {
            args: Prisma.medic_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.medic_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>[]
          }
          delete: {
            args: Prisma.medic_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>
          }
          update: {
            args: Prisma.medic_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>
          }
          deleteMany: {
            args: Prisma.medic_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medic_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.medic_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medic_infoPayload>
          }
          aggregate: {
            args: Prisma.Medic_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedic_info>
          }
          groupBy: {
            args: Prisma.medic_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medic_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.medic_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Medic_infoCountAggregateOutputType> | number
          }
        }
      }
      specialitati: {
        payload: Prisma.$specialitatiPayload<ExtArgs>
        fields: Prisma.specialitatiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.specialitatiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.specialitatiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>
          }
          findFirst: {
            args: Prisma.specialitatiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.specialitatiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>
          }
          findMany: {
            args: Prisma.specialitatiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>[]
          }
          create: {
            args: Prisma.specialitatiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>
          }
          createMany: {
            args: Prisma.specialitatiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.specialitatiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>[]
          }
          delete: {
            args: Prisma.specialitatiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>
          }
          update: {
            args: Prisma.specialitatiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>
          }
          deleteMany: {
            args: Prisma.specialitatiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.specialitatiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.specialitatiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specialitatiPayload>
          }
          aggregate: {
            args: Prisma.SpecialitatiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialitati>
          }
          groupBy: {
            args: Prisma.specialitatiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialitatiGroupByOutputType>[]
          }
          count: {
            args: Prisma.specialitatiCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialitatiCountAggregateOutputType> | number
          }
        }
      }
      program_lucru: {
        payload: Prisma.$program_lucruPayload<ExtArgs>
        fields: Prisma.program_lucruFieldRefs
        operations: {
          findUnique: {
            args: Prisma.program_lucruFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.program_lucruFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>
          }
          findFirst: {
            args: Prisma.program_lucruFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.program_lucruFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>
          }
          findMany: {
            args: Prisma.program_lucruFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>[]
          }
          create: {
            args: Prisma.program_lucruCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>
          }
          createMany: {
            args: Prisma.program_lucruCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.program_lucruCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>[]
          }
          delete: {
            args: Prisma.program_lucruDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>
          }
          update: {
            args: Prisma.program_lucruUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>
          }
          deleteMany: {
            args: Prisma.program_lucruDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.program_lucruUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.program_lucruUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_lucruPayload>
          }
          aggregate: {
            args: Prisma.Program_lucruAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram_lucru>
          }
          groupBy: {
            args: Prisma.program_lucruGroupByArgs<ExtArgs>
            result: $Utils.Optional<Program_lucruGroupByOutputType>[]
          }
          count: {
            args: Prisma.program_lucruCountArgs<ExtArgs>
            result: $Utils.Optional<Program_lucruCountAggregateOutputType> | number
          }
        }
      }
      user_logs: {
        payload: Prisma.$user_logsPayload<ExtArgs>
        fields: Prisma.user_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>
          }
          findFirst: {
            args: Prisma.user_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>
          }
          findMany: {
            args: Prisma.user_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>[]
          }
          create: {
            args: Prisma.user_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>
          }
          createMany: {
            args: Prisma.user_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>[]
          }
          delete: {
            args: Prisma.user_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>
          }
          update: {
            args: Prisma.user_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>
          }
          deleteMany: {
            args: Prisma.user_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_logsPayload>
          }
          aggregate: {
            args: Prisma.User_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_logs>
          }
          groupBy: {
            args: Prisma.user_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_logsCountArgs<ExtArgs>
            result: $Utils.Optional<User_logsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    programari: number
    refresh_tokens: number
    sessions: number
    user_logs: number
    programari_medic: number
    program_lucru: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programari?: boolean | UsersCountOutputTypeCountProgramariArgs
    refresh_tokens?: boolean | UsersCountOutputTypeCountRefresh_tokensArgs
    sessions?: boolean | UsersCountOutputTypeCountSessionsArgs
    user_logs?: boolean | UsersCountOutputTypeCountUser_logsArgs
    programari_medic?: boolean | UsersCountOutputTypeCountProgramari_medicArgs
    program_lucru?: boolean | UsersCountOutputTypeCountProgram_lucruArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProgramariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programariWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRefresh_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProgramari_medicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programariWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProgram_lucruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: program_lucruWhereInput
  }


  /**
   * Count Type Medic_infoCountOutputType
   */

  export type Medic_infoCountOutputType = {
    program_lucru: number
  }

  export type Medic_infoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program_lucru?: boolean | Medic_infoCountOutputTypeCountProgram_lucruArgs
  }

  // Custom InputTypes
  /**
   * Medic_infoCountOutputType without action
   */
  export type Medic_infoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medic_infoCountOutputType
     */
    select?: Medic_infoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Medic_infoCountOutputType without action
   */
  export type Medic_infoCountOutputTypeCountProgram_lucruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: program_lucruWhereInput
  }


  /**
   * Count Type SpecialitatiCountOutputType
   */

  export type SpecialitatiCountOutputType = {
    medic_info: number
  }

  export type SpecialitatiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medic_info?: boolean | SpecialitatiCountOutputTypeCountMedic_infoArgs
  }

  // Custom InputTypes
  /**
   * SpecialitatiCountOutputType without action
   */
  export type SpecialitatiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialitatiCountOutputType
     */
    select?: SpecialitatiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialitatiCountOutputType without action
   */
  export type SpecialitatiCountOutputTypeCountMedic_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medic_infoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model auth_keys
   */

  export type AggregateAuth_keys = {
    _count: Auth_keysCountAggregateOutputType | null
    _min: Auth_keysMinAggregateOutputType | null
    _max: Auth_keysMaxAggregateOutputType | null
  }

  export type Auth_keysMinAggregateOutputType = {
    kid: string | null
    public_key: string | null
    private_key: string | null
    algorithm: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Auth_keysMaxAggregateOutputType = {
    kid: string | null
    public_key: string | null
    private_key: string | null
    algorithm: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type Auth_keysCountAggregateOutputType = {
    kid: number
    public_key: number
    private_key: number
    algorithm: number
    is_active: number
    created_at: number
    _all: number
  }


  export type Auth_keysMinAggregateInputType = {
    kid?: true
    public_key?: true
    private_key?: true
    algorithm?: true
    is_active?: true
    created_at?: true
  }

  export type Auth_keysMaxAggregateInputType = {
    kid?: true
    public_key?: true
    private_key?: true
    algorithm?: true
    is_active?: true
    created_at?: true
  }

  export type Auth_keysCountAggregateInputType = {
    kid?: true
    public_key?: true
    private_key?: true
    algorithm?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type Auth_keysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_keys to aggregate.
     */
    where?: auth_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_keys to fetch.
     */
    orderBy?: auth_keysOrderByWithRelationInput | auth_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_keys
    **/
    _count?: true | Auth_keysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_keysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_keysMaxAggregateInputType
  }

  export type GetAuth_keysAggregateType<T extends Auth_keysAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_keys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_keys[P]>
      : GetScalarType<T[P], AggregateAuth_keys[P]>
  }




  export type auth_keysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_keysWhereInput
    orderBy?: auth_keysOrderByWithAggregationInput | auth_keysOrderByWithAggregationInput[]
    by: Auth_keysScalarFieldEnum[] | Auth_keysScalarFieldEnum
    having?: auth_keysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_keysCountAggregateInputType | true
    _min?: Auth_keysMinAggregateInputType
    _max?: Auth_keysMaxAggregateInputType
  }

  export type Auth_keysGroupByOutputType = {
    kid: string
    public_key: string
    private_key: string
    algorithm: string | null
    is_active: boolean | null
    created_at: Date | null
    _count: Auth_keysCountAggregateOutputType | null
    _min: Auth_keysMinAggregateOutputType | null
    _max: Auth_keysMaxAggregateOutputType | null
  }

  type GetAuth_keysGroupByPayload<T extends auth_keysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_keysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_keysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_keysGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_keysGroupByOutputType[P]>
        }
      >
    >


  export type auth_keysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kid?: boolean
    public_key?: boolean
    private_key?: boolean
    algorithm?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["auth_keys"]>

  export type auth_keysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kid?: boolean
    public_key?: boolean
    private_key?: boolean
    algorithm?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["auth_keys"]>

  export type auth_keysSelectScalar = {
    kid?: boolean
    public_key?: boolean
    private_key?: boolean
    algorithm?: boolean
    is_active?: boolean
    created_at?: boolean
  }


  export type $auth_keysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_keys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      kid: string
      public_key: string
      private_key: string
      algorithm: string | null
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["auth_keys"]>
    composites: {}
  }

  type auth_keysGetPayload<S extends boolean | null | undefined | auth_keysDefaultArgs> = $Result.GetResult<Prisma.$auth_keysPayload, S>

  type auth_keysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<auth_keysFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Auth_keysCountAggregateInputType | true
    }

  export interface auth_keysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_keys'], meta: { name: 'auth_keys' } }
    /**
     * Find zero or one Auth_keys that matches the filter.
     * @param {auth_keysFindUniqueArgs} args - Arguments to find a Auth_keys
     * @example
     * // Get one Auth_keys
     * const auth_keys = await prisma.auth_keys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_keysFindUniqueArgs>(args: SelectSubset<T, auth_keysFindUniqueArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Auth_keys that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {auth_keysFindUniqueOrThrowArgs} args - Arguments to find a Auth_keys
     * @example
     * // Get one Auth_keys
     * const auth_keys = await prisma.auth_keys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_keysFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_keysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Auth_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_keysFindFirstArgs} args - Arguments to find a Auth_keys
     * @example
     * // Get one Auth_keys
     * const auth_keys = await prisma.auth_keys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_keysFindFirstArgs>(args?: SelectSubset<T, auth_keysFindFirstArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Auth_keys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_keysFindFirstOrThrowArgs} args - Arguments to find a Auth_keys
     * @example
     * // Get one Auth_keys
     * const auth_keys = await prisma.auth_keys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_keysFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_keysFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Auth_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_keysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_keys
     * const auth_keys = await prisma.auth_keys.findMany()
     * 
     * // Get first 10 Auth_keys
     * const auth_keys = await prisma.auth_keys.findMany({ take: 10 })
     * 
     * // Only select the `kid`
     * const auth_keysWithKidOnly = await prisma.auth_keys.findMany({ select: { kid: true } })
     * 
     */
    findMany<T extends auth_keysFindManyArgs>(args?: SelectSubset<T, auth_keysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Auth_keys.
     * @param {auth_keysCreateArgs} args - Arguments to create a Auth_keys.
     * @example
     * // Create one Auth_keys
     * const Auth_keys = await prisma.auth_keys.create({
     *   data: {
     *     // ... data to create a Auth_keys
     *   }
     * })
     * 
     */
    create<T extends auth_keysCreateArgs>(args: SelectSubset<T, auth_keysCreateArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Auth_keys.
     * @param {auth_keysCreateManyArgs} args - Arguments to create many Auth_keys.
     * @example
     * // Create many Auth_keys
     * const auth_keys = await prisma.auth_keys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_keysCreateManyArgs>(args?: SelectSubset<T, auth_keysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_keys and returns the data saved in the database.
     * @param {auth_keysCreateManyAndReturnArgs} args - Arguments to create many Auth_keys.
     * @example
     * // Create many Auth_keys
     * const auth_keys = await prisma.auth_keys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_keys and only return the `kid`
     * const auth_keysWithKidOnly = await prisma.auth_keys.createManyAndReturn({ 
     *   select: { kid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_keysCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_keysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Auth_keys.
     * @param {auth_keysDeleteArgs} args - Arguments to delete one Auth_keys.
     * @example
     * // Delete one Auth_keys
     * const Auth_keys = await prisma.auth_keys.delete({
     *   where: {
     *     // ... filter to delete one Auth_keys
     *   }
     * })
     * 
     */
    delete<T extends auth_keysDeleteArgs>(args: SelectSubset<T, auth_keysDeleteArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Auth_keys.
     * @param {auth_keysUpdateArgs} args - Arguments to update one Auth_keys.
     * @example
     * // Update one Auth_keys
     * const auth_keys = await prisma.auth_keys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_keysUpdateArgs>(args: SelectSubset<T, auth_keysUpdateArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Auth_keys.
     * @param {auth_keysDeleteManyArgs} args - Arguments to filter Auth_keys to delete.
     * @example
     * // Delete a few Auth_keys
     * const { count } = await prisma.auth_keys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_keysDeleteManyArgs>(args?: SelectSubset<T, auth_keysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_keysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_keys
     * const auth_keys = await prisma.auth_keys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_keysUpdateManyArgs>(args: SelectSubset<T, auth_keysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auth_keys.
     * @param {auth_keysUpsertArgs} args - Arguments to update or create a Auth_keys.
     * @example
     * // Update or create a Auth_keys
     * const auth_keys = await prisma.auth_keys.upsert({
     *   create: {
     *     // ... data to create a Auth_keys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_keys we want to update
     *   }
     * })
     */
    upsert<T extends auth_keysUpsertArgs>(args: SelectSubset<T, auth_keysUpsertArgs<ExtArgs>>): Prisma__auth_keysClient<$Result.GetResult<Prisma.$auth_keysPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Auth_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_keysCountArgs} args - Arguments to filter Auth_keys to count.
     * @example
     * // Count the number of Auth_keys
     * const count = await prisma.auth_keys.count({
     *   where: {
     *     // ... the filter for the Auth_keys we want to count
     *   }
     * })
    **/
    count<T extends auth_keysCountArgs>(
      args?: Subset<T, auth_keysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_keysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_keysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_keysAggregateArgs>(args: Subset<T, Auth_keysAggregateArgs>): Prisma.PrismaPromise<GetAuth_keysAggregateType<T>>

    /**
     * Group by Auth_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_keysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_keysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_keysGroupByArgs['orderBy'] }
        : { orderBy?: auth_keysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_keysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_keysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_keys model
   */
  readonly fields: auth_keysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_keys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_keysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_keys model
   */ 
  interface auth_keysFieldRefs {
    readonly kid: FieldRef<"auth_keys", 'String'>
    readonly public_key: FieldRef<"auth_keys", 'String'>
    readonly private_key: FieldRef<"auth_keys", 'String'>
    readonly algorithm: FieldRef<"auth_keys", 'String'>
    readonly is_active: FieldRef<"auth_keys", 'Boolean'>
    readonly created_at: FieldRef<"auth_keys", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_keys findUnique
   */
  export type auth_keysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * Filter, which auth_keys to fetch.
     */
    where: auth_keysWhereUniqueInput
  }

  /**
   * auth_keys findUniqueOrThrow
   */
  export type auth_keysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * Filter, which auth_keys to fetch.
     */
    where: auth_keysWhereUniqueInput
  }

  /**
   * auth_keys findFirst
   */
  export type auth_keysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * Filter, which auth_keys to fetch.
     */
    where?: auth_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_keys to fetch.
     */
    orderBy?: auth_keysOrderByWithRelationInput | auth_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_keys.
     */
    cursor?: auth_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_keys.
     */
    distinct?: Auth_keysScalarFieldEnum | Auth_keysScalarFieldEnum[]
  }

  /**
   * auth_keys findFirstOrThrow
   */
  export type auth_keysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * Filter, which auth_keys to fetch.
     */
    where?: auth_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_keys to fetch.
     */
    orderBy?: auth_keysOrderByWithRelationInput | auth_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_keys.
     */
    cursor?: auth_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_keys.
     */
    distinct?: Auth_keysScalarFieldEnum | Auth_keysScalarFieldEnum[]
  }

  /**
   * auth_keys findMany
   */
  export type auth_keysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * Filter, which auth_keys to fetch.
     */
    where?: auth_keysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_keys to fetch.
     */
    orderBy?: auth_keysOrderByWithRelationInput | auth_keysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_keys.
     */
    cursor?: auth_keysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_keys.
     */
    skip?: number
    distinct?: Auth_keysScalarFieldEnum | Auth_keysScalarFieldEnum[]
  }

  /**
   * auth_keys create
   */
  export type auth_keysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * The data needed to create a auth_keys.
     */
    data: XOR<auth_keysCreateInput, auth_keysUncheckedCreateInput>
  }

  /**
   * auth_keys createMany
   */
  export type auth_keysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_keys.
     */
    data: auth_keysCreateManyInput | auth_keysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_keys createManyAndReturn
   */
  export type auth_keysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many auth_keys.
     */
    data: auth_keysCreateManyInput | auth_keysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auth_keys update
   */
  export type auth_keysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * The data needed to update a auth_keys.
     */
    data: XOR<auth_keysUpdateInput, auth_keysUncheckedUpdateInput>
    /**
     * Choose, which auth_keys to update.
     */
    where: auth_keysWhereUniqueInput
  }

  /**
   * auth_keys updateMany
   */
  export type auth_keysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_keys.
     */
    data: XOR<auth_keysUpdateManyMutationInput, auth_keysUncheckedUpdateManyInput>
    /**
     * Filter which auth_keys to update
     */
    where?: auth_keysWhereInput
  }

  /**
   * auth_keys upsert
   */
  export type auth_keysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * The filter to search for the auth_keys to update in case it exists.
     */
    where: auth_keysWhereUniqueInput
    /**
     * In case the auth_keys found by the `where` argument doesn't exist, create a new auth_keys with this data.
     */
    create: XOR<auth_keysCreateInput, auth_keysUncheckedCreateInput>
    /**
     * In case the auth_keys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_keysUpdateInput, auth_keysUncheckedUpdateInput>
  }

  /**
   * auth_keys delete
   */
  export type auth_keysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
    /**
     * Filter which auth_keys to delete.
     */
    where: auth_keysWhereUniqueInput
  }

  /**
   * auth_keys deleteMany
   */
  export type auth_keysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_keys to delete
     */
    where?: auth_keysWhereInput
  }

  /**
   * auth_keys without action
   */
  export type auth_keysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_keys
     */
    select?: auth_keysSelect<ExtArgs> | null
  }


  /**
   * Model oauth_clients
   */

  export type AggregateOauth_clients = {
    _count: Oauth_clientsCountAggregateOutputType | null
    _min: Oauth_clientsMinAggregateOutputType | null
    _max: Oauth_clientsMaxAggregateOutputType | null
  }

  export type Oauth_clientsMinAggregateOutputType = {
    client_id: string | null
    client_secret_hash: string | null
    name: string | null
  }

  export type Oauth_clientsMaxAggregateOutputType = {
    client_id: string | null
    client_secret_hash: string | null
    name: string | null
  }

  export type Oauth_clientsCountAggregateOutputType = {
    client_id: number
    client_secret_hash: number
    redirect_uris: number
    name: number
    _all: number
  }


  export type Oauth_clientsMinAggregateInputType = {
    client_id?: true
    client_secret_hash?: true
    name?: true
  }

  export type Oauth_clientsMaxAggregateInputType = {
    client_id?: true
    client_secret_hash?: true
    name?: true
  }

  export type Oauth_clientsCountAggregateInputType = {
    client_id?: true
    client_secret_hash?: true
    redirect_uris?: true
    name?: true
    _all?: true
  }

  export type Oauth_clientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which oauth_clients to aggregate.
     */
    where?: oauth_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_clients to fetch.
     */
    orderBy?: oauth_clientsOrderByWithRelationInput | oauth_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: oauth_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned oauth_clients
    **/
    _count?: true | Oauth_clientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Oauth_clientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Oauth_clientsMaxAggregateInputType
  }

  export type GetOauth_clientsAggregateType<T extends Oauth_clientsAggregateArgs> = {
        [P in keyof T & keyof AggregateOauth_clients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauth_clients[P]>
      : GetScalarType<T[P], AggregateOauth_clients[P]>
  }




  export type oauth_clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: oauth_clientsWhereInput
    orderBy?: oauth_clientsOrderByWithAggregationInput | oauth_clientsOrderByWithAggregationInput[]
    by: Oauth_clientsScalarFieldEnum[] | Oauth_clientsScalarFieldEnum
    having?: oauth_clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Oauth_clientsCountAggregateInputType | true
    _min?: Oauth_clientsMinAggregateInputType
    _max?: Oauth_clientsMaxAggregateInputType
  }

  export type Oauth_clientsGroupByOutputType = {
    client_id: string
    client_secret_hash: string | null
    redirect_uris: string[]
    name: string | null
    _count: Oauth_clientsCountAggregateOutputType | null
    _min: Oauth_clientsMinAggregateOutputType | null
    _max: Oauth_clientsMaxAggregateOutputType | null
  }

  type GetOauth_clientsGroupByPayload<T extends oauth_clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Oauth_clientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Oauth_clientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Oauth_clientsGroupByOutputType[P]>
            : GetScalarType<T[P], Oauth_clientsGroupByOutputType[P]>
        }
      >
    >


  export type oauth_clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_secret_hash?: boolean
    redirect_uris?: boolean
    name?: boolean
  }, ExtArgs["result"]["oauth_clients"]>

  export type oauth_clientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    client_secret_hash?: boolean
    redirect_uris?: boolean
    name?: boolean
  }, ExtArgs["result"]["oauth_clients"]>

  export type oauth_clientsSelectScalar = {
    client_id?: boolean
    client_secret_hash?: boolean
    redirect_uris?: boolean
    name?: boolean
  }


  export type $oauth_clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "oauth_clients"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      client_id: string
      client_secret_hash: string | null
      redirect_uris: string[]
      name: string | null
    }, ExtArgs["result"]["oauth_clients"]>
    composites: {}
  }

  type oauth_clientsGetPayload<S extends boolean | null | undefined | oauth_clientsDefaultArgs> = $Result.GetResult<Prisma.$oauth_clientsPayload, S>

  type oauth_clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<oauth_clientsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Oauth_clientsCountAggregateInputType | true
    }

  export interface oauth_clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['oauth_clients'], meta: { name: 'oauth_clients' } }
    /**
     * Find zero or one Oauth_clients that matches the filter.
     * @param {oauth_clientsFindUniqueArgs} args - Arguments to find a Oauth_clients
     * @example
     * // Get one Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends oauth_clientsFindUniqueArgs>(args: SelectSubset<T, oauth_clientsFindUniqueArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Oauth_clients that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {oauth_clientsFindUniqueOrThrowArgs} args - Arguments to find a Oauth_clients
     * @example
     * // Get one Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends oauth_clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, oauth_clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Oauth_clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_clientsFindFirstArgs} args - Arguments to find a Oauth_clients
     * @example
     * // Get one Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends oauth_clientsFindFirstArgs>(args?: SelectSubset<T, oauth_clientsFindFirstArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Oauth_clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_clientsFindFirstOrThrowArgs} args - Arguments to find a Oauth_clients
     * @example
     * // Get one Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends oauth_clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, oauth_clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Oauth_clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.findMany()
     * 
     * // Get first 10 Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const oauth_clientsWithClient_idOnly = await prisma.oauth_clients.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends oauth_clientsFindManyArgs>(args?: SelectSubset<T, oauth_clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Oauth_clients.
     * @param {oauth_clientsCreateArgs} args - Arguments to create a Oauth_clients.
     * @example
     * // Create one Oauth_clients
     * const Oauth_clients = await prisma.oauth_clients.create({
     *   data: {
     *     // ... data to create a Oauth_clients
     *   }
     * })
     * 
     */
    create<T extends oauth_clientsCreateArgs>(args: SelectSubset<T, oauth_clientsCreateArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Oauth_clients.
     * @param {oauth_clientsCreateManyArgs} args - Arguments to create many Oauth_clients.
     * @example
     * // Create many Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends oauth_clientsCreateManyArgs>(args?: SelectSubset<T, oauth_clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Oauth_clients and returns the data saved in the database.
     * @param {oauth_clientsCreateManyAndReturnArgs} args - Arguments to create many Oauth_clients.
     * @example
     * // Create many Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Oauth_clients and only return the `client_id`
     * const oauth_clientsWithClient_idOnly = await prisma.oauth_clients.createManyAndReturn({ 
     *   select: { client_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends oauth_clientsCreateManyAndReturnArgs>(args?: SelectSubset<T, oauth_clientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Oauth_clients.
     * @param {oauth_clientsDeleteArgs} args - Arguments to delete one Oauth_clients.
     * @example
     * // Delete one Oauth_clients
     * const Oauth_clients = await prisma.oauth_clients.delete({
     *   where: {
     *     // ... filter to delete one Oauth_clients
     *   }
     * })
     * 
     */
    delete<T extends oauth_clientsDeleteArgs>(args: SelectSubset<T, oauth_clientsDeleteArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Oauth_clients.
     * @param {oauth_clientsUpdateArgs} args - Arguments to update one Oauth_clients.
     * @example
     * // Update one Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends oauth_clientsUpdateArgs>(args: SelectSubset<T, oauth_clientsUpdateArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Oauth_clients.
     * @param {oauth_clientsDeleteManyArgs} args - Arguments to filter Oauth_clients to delete.
     * @example
     * // Delete a few Oauth_clients
     * const { count } = await prisma.oauth_clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends oauth_clientsDeleteManyArgs>(args?: SelectSubset<T, oauth_clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oauth_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends oauth_clientsUpdateManyArgs>(args: SelectSubset<T, oauth_clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Oauth_clients.
     * @param {oauth_clientsUpsertArgs} args - Arguments to update or create a Oauth_clients.
     * @example
     * // Update or create a Oauth_clients
     * const oauth_clients = await prisma.oauth_clients.upsert({
     *   create: {
     *     // ... data to create a Oauth_clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oauth_clients we want to update
     *   }
     * })
     */
    upsert<T extends oauth_clientsUpsertArgs>(args: SelectSubset<T, oauth_clientsUpsertArgs<ExtArgs>>): Prisma__oauth_clientsClient<$Result.GetResult<Prisma.$oauth_clientsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Oauth_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_clientsCountArgs} args - Arguments to filter Oauth_clients to count.
     * @example
     * // Count the number of Oauth_clients
     * const count = await prisma.oauth_clients.count({
     *   where: {
     *     // ... the filter for the Oauth_clients we want to count
     *   }
     * })
    **/
    count<T extends oauth_clientsCountArgs>(
      args?: Subset<T, oauth_clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Oauth_clientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oauth_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Oauth_clientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Oauth_clientsAggregateArgs>(args: Subset<T, Oauth_clientsAggregateArgs>): Prisma.PrismaPromise<GetOauth_clientsAggregateType<T>>

    /**
     * Group by Oauth_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_clientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends oauth_clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: oauth_clientsGroupByArgs['orderBy'] }
        : { orderBy?: oauth_clientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, oauth_clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauth_clientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the oauth_clients model
   */
  readonly fields: oauth_clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for oauth_clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__oauth_clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the oauth_clients model
   */ 
  interface oauth_clientsFieldRefs {
    readonly client_id: FieldRef<"oauth_clients", 'String'>
    readonly client_secret_hash: FieldRef<"oauth_clients", 'String'>
    readonly redirect_uris: FieldRef<"oauth_clients", 'String[]'>
    readonly name: FieldRef<"oauth_clients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * oauth_clients findUnique
   */
  export type oauth_clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * Filter, which oauth_clients to fetch.
     */
    where: oauth_clientsWhereUniqueInput
  }

  /**
   * oauth_clients findUniqueOrThrow
   */
  export type oauth_clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * Filter, which oauth_clients to fetch.
     */
    where: oauth_clientsWhereUniqueInput
  }

  /**
   * oauth_clients findFirst
   */
  export type oauth_clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * Filter, which oauth_clients to fetch.
     */
    where?: oauth_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_clients to fetch.
     */
    orderBy?: oauth_clientsOrderByWithRelationInput | oauth_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for oauth_clients.
     */
    cursor?: oauth_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of oauth_clients.
     */
    distinct?: Oauth_clientsScalarFieldEnum | Oauth_clientsScalarFieldEnum[]
  }

  /**
   * oauth_clients findFirstOrThrow
   */
  export type oauth_clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * Filter, which oauth_clients to fetch.
     */
    where?: oauth_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_clients to fetch.
     */
    orderBy?: oauth_clientsOrderByWithRelationInput | oauth_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for oauth_clients.
     */
    cursor?: oauth_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of oauth_clients.
     */
    distinct?: Oauth_clientsScalarFieldEnum | Oauth_clientsScalarFieldEnum[]
  }

  /**
   * oauth_clients findMany
   */
  export type oauth_clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * Filter, which oauth_clients to fetch.
     */
    where?: oauth_clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_clients to fetch.
     */
    orderBy?: oauth_clientsOrderByWithRelationInput | oauth_clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing oauth_clients.
     */
    cursor?: oauth_clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_clients.
     */
    skip?: number
    distinct?: Oauth_clientsScalarFieldEnum | Oauth_clientsScalarFieldEnum[]
  }

  /**
   * oauth_clients create
   */
  export type oauth_clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * The data needed to create a oauth_clients.
     */
    data: XOR<oauth_clientsCreateInput, oauth_clientsUncheckedCreateInput>
  }

  /**
   * oauth_clients createMany
   */
  export type oauth_clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many oauth_clients.
     */
    data: oauth_clientsCreateManyInput | oauth_clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * oauth_clients createManyAndReturn
   */
  export type oauth_clientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many oauth_clients.
     */
    data: oauth_clientsCreateManyInput | oauth_clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * oauth_clients update
   */
  export type oauth_clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * The data needed to update a oauth_clients.
     */
    data: XOR<oauth_clientsUpdateInput, oauth_clientsUncheckedUpdateInput>
    /**
     * Choose, which oauth_clients to update.
     */
    where: oauth_clientsWhereUniqueInput
  }

  /**
   * oauth_clients updateMany
   */
  export type oauth_clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update oauth_clients.
     */
    data: XOR<oauth_clientsUpdateManyMutationInput, oauth_clientsUncheckedUpdateManyInput>
    /**
     * Filter which oauth_clients to update
     */
    where?: oauth_clientsWhereInput
  }

  /**
   * oauth_clients upsert
   */
  export type oauth_clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * The filter to search for the oauth_clients to update in case it exists.
     */
    where: oauth_clientsWhereUniqueInput
    /**
     * In case the oauth_clients found by the `where` argument doesn't exist, create a new oauth_clients with this data.
     */
    create: XOR<oauth_clientsCreateInput, oauth_clientsUncheckedCreateInput>
    /**
     * In case the oauth_clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<oauth_clientsUpdateInput, oauth_clientsUncheckedUpdateInput>
  }

  /**
   * oauth_clients delete
   */
  export type oauth_clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
    /**
     * Filter which oauth_clients to delete.
     */
    where: oauth_clientsWhereUniqueInput
  }

  /**
   * oauth_clients deleteMany
   */
  export type oauth_clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which oauth_clients to delete
     */
    where?: oauth_clientsWhereInput
  }

  /**
   * oauth_clients without action
   */
  export type oauth_clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_clients
     */
    select?: oauth_clientsSelect<ExtArgs> | null
  }


  /**
   * Model oauth_users
   */

  export type AggregateOauth_users = {
    _count: Oauth_usersCountAggregateOutputType | null
    _min: Oauth_usersMinAggregateOutputType | null
    _max: Oauth_usersMaxAggregateOutputType | null
  }

  export type Oauth_usersMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Oauth_usersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Oauth_usersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password_hash: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Oauth_usersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type Oauth_usersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type Oauth_usersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Oauth_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which oauth_users to aggregate.
     */
    where?: oauth_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_users to fetch.
     */
    orderBy?: oauth_usersOrderByWithRelationInput | oauth_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: oauth_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned oauth_users
    **/
    _count?: true | Oauth_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Oauth_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Oauth_usersMaxAggregateInputType
  }

  export type GetOauth_usersAggregateType<T extends Oauth_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateOauth_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauth_users[P]>
      : GetScalarType<T[P], AggregateOauth_users[P]>
  }




  export type oauth_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: oauth_usersWhereInput
    orderBy?: oauth_usersOrderByWithAggregationInput | oauth_usersOrderByWithAggregationInput[]
    by: Oauth_usersScalarFieldEnum[] | Oauth_usersScalarFieldEnum
    having?: oauth_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Oauth_usersCountAggregateInputType | true
    _min?: Oauth_usersMinAggregateInputType
    _max?: Oauth_usersMaxAggregateInputType
  }

  export type Oauth_usersGroupByOutputType = {
    id: string
    email: string
    username: string
    password_hash: string
    role: string
    created_at: Date
    updated_at: Date
    _count: Oauth_usersCountAggregateOutputType | null
    _min: Oauth_usersMinAggregateOutputType | null
    _max: Oauth_usersMaxAggregateOutputType | null
  }

  type GetOauth_usersGroupByPayload<T extends oauth_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Oauth_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Oauth_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Oauth_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Oauth_usersGroupByOutputType[P]>
        }
      >
    >


  export type oauth_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["oauth_users"]>

  export type oauth_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["oauth_users"]>

  export type oauth_usersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $oauth_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "oauth_users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password_hash: string
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["oauth_users"]>
    composites: {}
  }

  type oauth_usersGetPayload<S extends boolean | null | undefined | oauth_usersDefaultArgs> = $Result.GetResult<Prisma.$oauth_usersPayload, S>

  type oauth_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<oauth_usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Oauth_usersCountAggregateInputType | true
    }

  export interface oauth_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['oauth_users'], meta: { name: 'oauth_users' } }
    /**
     * Find zero or one Oauth_users that matches the filter.
     * @param {oauth_usersFindUniqueArgs} args - Arguments to find a Oauth_users
     * @example
     * // Get one Oauth_users
     * const oauth_users = await prisma.oauth_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends oauth_usersFindUniqueArgs>(args: SelectSubset<T, oauth_usersFindUniqueArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Oauth_users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {oauth_usersFindUniqueOrThrowArgs} args - Arguments to find a Oauth_users
     * @example
     * // Get one Oauth_users
     * const oauth_users = await prisma.oauth_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends oauth_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, oauth_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Oauth_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_usersFindFirstArgs} args - Arguments to find a Oauth_users
     * @example
     * // Get one Oauth_users
     * const oauth_users = await prisma.oauth_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends oauth_usersFindFirstArgs>(args?: SelectSubset<T, oauth_usersFindFirstArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Oauth_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_usersFindFirstOrThrowArgs} args - Arguments to find a Oauth_users
     * @example
     * // Get one Oauth_users
     * const oauth_users = await prisma.oauth_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends oauth_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, oauth_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Oauth_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Oauth_users
     * const oauth_users = await prisma.oauth_users.findMany()
     * 
     * // Get first 10 Oauth_users
     * const oauth_users = await prisma.oauth_users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oauth_usersWithIdOnly = await prisma.oauth_users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends oauth_usersFindManyArgs>(args?: SelectSubset<T, oauth_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Oauth_users.
     * @param {oauth_usersCreateArgs} args - Arguments to create a Oauth_users.
     * @example
     * // Create one Oauth_users
     * const Oauth_users = await prisma.oauth_users.create({
     *   data: {
     *     // ... data to create a Oauth_users
     *   }
     * })
     * 
     */
    create<T extends oauth_usersCreateArgs>(args: SelectSubset<T, oauth_usersCreateArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Oauth_users.
     * @param {oauth_usersCreateManyArgs} args - Arguments to create many Oauth_users.
     * @example
     * // Create many Oauth_users
     * const oauth_users = await prisma.oauth_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends oauth_usersCreateManyArgs>(args?: SelectSubset<T, oauth_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Oauth_users and returns the data saved in the database.
     * @param {oauth_usersCreateManyAndReturnArgs} args - Arguments to create many Oauth_users.
     * @example
     * // Create many Oauth_users
     * const oauth_users = await prisma.oauth_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Oauth_users and only return the `id`
     * const oauth_usersWithIdOnly = await prisma.oauth_users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends oauth_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, oauth_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Oauth_users.
     * @param {oauth_usersDeleteArgs} args - Arguments to delete one Oauth_users.
     * @example
     * // Delete one Oauth_users
     * const Oauth_users = await prisma.oauth_users.delete({
     *   where: {
     *     // ... filter to delete one Oauth_users
     *   }
     * })
     * 
     */
    delete<T extends oauth_usersDeleteArgs>(args: SelectSubset<T, oauth_usersDeleteArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Oauth_users.
     * @param {oauth_usersUpdateArgs} args - Arguments to update one Oauth_users.
     * @example
     * // Update one Oauth_users
     * const oauth_users = await prisma.oauth_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends oauth_usersUpdateArgs>(args: SelectSubset<T, oauth_usersUpdateArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Oauth_users.
     * @param {oauth_usersDeleteManyArgs} args - Arguments to filter Oauth_users to delete.
     * @example
     * // Delete a few Oauth_users
     * const { count } = await prisma.oauth_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends oauth_usersDeleteManyArgs>(args?: SelectSubset<T, oauth_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oauth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Oauth_users
     * const oauth_users = await prisma.oauth_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends oauth_usersUpdateManyArgs>(args: SelectSubset<T, oauth_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Oauth_users.
     * @param {oauth_usersUpsertArgs} args - Arguments to update or create a Oauth_users.
     * @example
     * // Update or create a Oauth_users
     * const oauth_users = await prisma.oauth_users.upsert({
     *   create: {
     *     // ... data to create a Oauth_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oauth_users we want to update
     *   }
     * })
     */
    upsert<T extends oauth_usersUpsertArgs>(args: SelectSubset<T, oauth_usersUpsertArgs<ExtArgs>>): Prisma__oauth_usersClient<$Result.GetResult<Prisma.$oauth_usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Oauth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_usersCountArgs} args - Arguments to filter Oauth_users to count.
     * @example
     * // Count the number of Oauth_users
     * const count = await prisma.oauth_users.count({
     *   where: {
     *     // ... the filter for the Oauth_users we want to count
     *   }
     * })
    **/
    count<T extends oauth_usersCountArgs>(
      args?: Subset<T, oauth_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Oauth_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oauth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Oauth_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Oauth_usersAggregateArgs>(args: Subset<T, Oauth_usersAggregateArgs>): Prisma.PrismaPromise<GetOauth_usersAggregateType<T>>

    /**
     * Group by Oauth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {oauth_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends oauth_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: oauth_usersGroupByArgs['orderBy'] }
        : { orderBy?: oauth_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, oauth_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauth_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the oauth_users model
   */
  readonly fields: oauth_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for oauth_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__oauth_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the oauth_users model
   */ 
  interface oauth_usersFieldRefs {
    readonly id: FieldRef<"oauth_users", 'String'>
    readonly email: FieldRef<"oauth_users", 'String'>
    readonly username: FieldRef<"oauth_users", 'String'>
    readonly password_hash: FieldRef<"oauth_users", 'String'>
    readonly role: FieldRef<"oauth_users", 'String'>
    readonly created_at: FieldRef<"oauth_users", 'DateTime'>
    readonly updated_at: FieldRef<"oauth_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * oauth_users findUnique
   */
  export type oauth_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * Filter, which oauth_users to fetch.
     */
    where: oauth_usersWhereUniqueInput
  }

  /**
   * oauth_users findUniqueOrThrow
   */
  export type oauth_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * Filter, which oauth_users to fetch.
     */
    where: oauth_usersWhereUniqueInput
  }

  /**
   * oauth_users findFirst
   */
  export type oauth_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * Filter, which oauth_users to fetch.
     */
    where?: oauth_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_users to fetch.
     */
    orderBy?: oauth_usersOrderByWithRelationInput | oauth_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for oauth_users.
     */
    cursor?: oauth_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of oauth_users.
     */
    distinct?: Oauth_usersScalarFieldEnum | Oauth_usersScalarFieldEnum[]
  }

  /**
   * oauth_users findFirstOrThrow
   */
  export type oauth_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * Filter, which oauth_users to fetch.
     */
    where?: oauth_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_users to fetch.
     */
    orderBy?: oauth_usersOrderByWithRelationInput | oauth_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for oauth_users.
     */
    cursor?: oauth_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of oauth_users.
     */
    distinct?: Oauth_usersScalarFieldEnum | Oauth_usersScalarFieldEnum[]
  }

  /**
   * oauth_users findMany
   */
  export type oauth_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * Filter, which oauth_users to fetch.
     */
    where?: oauth_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of oauth_users to fetch.
     */
    orderBy?: oauth_usersOrderByWithRelationInput | oauth_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing oauth_users.
     */
    cursor?: oauth_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` oauth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` oauth_users.
     */
    skip?: number
    distinct?: Oauth_usersScalarFieldEnum | Oauth_usersScalarFieldEnum[]
  }

  /**
   * oauth_users create
   */
  export type oauth_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * The data needed to create a oauth_users.
     */
    data: XOR<oauth_usersCreateInput, oauth_usersUncheckedCreateInput>
  }

  /**
   * oauth_users createMany
   */
  export type oauth_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many oauth_users.
     */
    data: oauth_usersCreateManyInput | oauth_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * oauth_users createManyAndReturn
   */
  export type oauth_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many oauth_users.
     */
    data: oauth_usersCreateManyInput | oauth_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * oauth_users update
   */
  export type oauth_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * The data needed to update a oauth_users.
     */
    data: XOR<oauth_usersUpdateInput, oauth_usersUncheckedUpdateInput>
    /**
     * Choose, which oauth_users to update.
     */
    where: oauth_usersWhereUniqueInput
  }

  /**
   * oauth_users updateMany
   */
  export type oauth_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update oauth_users.
     */
    data: XOR<oauth_usersUpdateManyMutationInput, oauth_usersUncheckedUpdateManyInput>
    /**
     * Filter which oauth_users to update
     */
    where?: oauth_usersWhereInput
  }

  /**
   * oauth_users upsert
   */
  export type oauth_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * The filter to search for the oauth_users to update in case it exists.
     */
    where: oauth_usersWhereUniqueInput
    /**
     * In case the oauth_users found by the `where` argument doesn't exist, create a new oauth_users with this data.
     */
    create: XOR<oauth_usersCreateInput, oauth_usersUncheckedCreateInput>
    /**
     * In case the oauth_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<oauth_usersUpdateInput, oauth_usersUncheckedUpdateInput>
  }

  /**
   * oauth_users delete
   */
  export type oauth_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
    /**
     * Filter which oauth_users to delete.
     */
    where: oauth_usersWhereUniqueInput
  }

  /**
   * oauth_users deleteMany
   */
  export type oauth_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which oauth_users to delete
     */
    where?: oauth_usersWhereInput
  }

  /**
   * oauth_users without action
   */
  export type oauth_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the oauth_users
     */
    select?: oauth_usersSelect<ExtArgs> | null
  }


  /**
   * Model refresh_tokens
   */

  export type AggregateRefresh_tokens = {
    _count: Refresh_tokensCountAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  export type Refresh_tokensMinAggregateOutputType = {
    token_id: string | null
    user_id: string | null
    client_id: string | null
    scope: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Refresh_tokensMaxAggregateOutputType = {
    token_id: string | null
    user_id: string | null
    client_id: string | null
    scope: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type Refresh_tokensCountAggregateOutputType = {
    token_id: number
    user_id: number
    client_id: number
    scope: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type Refresh_tokensMinAggregateInputType = {
    token_id?: true
    user_id?: true
    client_id?: true
    scope?: true
    expires_at?: true
    created_at?: true
  }

  export type Refresh_tokensMaxAggregateInputType = {
    token_id?: true
    user_id?: true
    client_id?: true
    scope?: true
    expires_at?: true
    created_at?: true
  }

  export type Refresh_tokensCountAggregateInputType = {
    token_id?: true
    user_id?: true
    client_id?: true
    scope?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type Refresh_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to aggregate.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refresh_tokens
    **/
    _count?: true | Refresh_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Refresh_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Refresh_tokensMaxAggregateInputType
  }

  export type GetRefresh_tokensAggregateType<T extends Refresh_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateRefresh_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefresh_tokens[P]>
      : GetScalarType<T[P], AggregateRefresh_tokens[P]>
  }




  export type refresh_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokensWhereInput
    orderBy?: refresh_tokensOrderByWithAggregationInput | refresh_tokensOrderByWithAggregationInput[]
    by: Refresh_tokensScalarFieldEnum[] | Refresh_tokensScalarFieldEnum
    having?: refresh_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Refresh_tokensCountAggregateInputType | true
    _min?: Refresh_tokensMinAggregateInputType
    _max?: Refresh_tokensMaxAggregateInputType
  }

  export type Refresh_tokensGroupByOutputType = {
    token_id: string
    user_id: string | null
    client_id: string
    scope: string | null
    expires_at: Date
    created_at: Date | null
    _count: Refresh_tokensCountAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  type GetRefresh_tokensGroupByPayload<T extends refresh_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Refresh_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Refresh_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
        }
      >
    >


  export type refresh_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    user_id?: boolean
    client_id?: boolean
    scope?: boolean
    expires_at?: boolean
    created_at?: boolean
    users?: boolean | refresh_tokens$usersArgs<ExtArgs>
  }, ExtArgs["result"]["refresh_tokens"]>

  export type refresh_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    user_id?: boolean
    client_id?: boolean
    scope?: boolean
    expires_at?: boolean
    created_at?: boolean
    users?: boolean | refresh_tokens$usersArgs<ExtArgs>
  }, ExtArgs["result"]["refresh_tokens"]>

  export type refresh_tokensSelectScalar = {
    token_id?: boolean
    user_id?: boolean
    client_id?: boolean
    scope?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type refresh_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | refresh_tokens$usersArgs<ExtArgs>
  }
  export type refresh_tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | refresh_tokens$usersArgs<ExtArgs>
  }

  export type $refresh_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refresh_tokens"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      token_id: string
      user_id: string | null
      client_id: string
      scope: string | null
      expires_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["refresh_tokens"]>
    composites: {}
  }

  type refresh_tokensGetPayload<S extends boolean | null | undefined | refresh_tokensDefaultArgs> = $Result.GetResult<Prisma.$refresh_tokensPayload, S>

  type refresh_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<refresh_tokensFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Refresh_tokensCountAggregateInputType | true
    }

  export interface refresh_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refresh_tokens'], meta: { name: 'refresh_tokens' } }
    /**
     * Find zero or one Refresh_tokens that matches the filter.
     * @param {refresh_tokensFindUniqueArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refresh_tokensFindUniqueArgs>(args: SelectSubset<T, refresh_tokensFindUniqueArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Refresh_tokens that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {refresh_tokensFindUniqueOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refresh_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, refresh_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refresh_tokensFindFirstArgs>(args?: SelectSubset<T, refresh_tokensFindFirstArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Refresh_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refresh_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, refresh_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany()
     * 
     * // Get first 10 Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany({ take: 10 })
     * 
     * // Only select the `token_id`
     * const refresh_tokensWithToken_idOnly = await prisma.refresh_tokens.findMany({ select: { token_id: true } })
     * 
     */
    findMany<T extends refresh_tokensFindManyArgs>(args?: SelectSubset<T, refresh_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Refresh_tokens.
     * @param {refresh_tokensCreateArgs} args - Arguments to create a Refresh_tokens.
     * @example
     * // Create one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.create({
     *   data: {
     *     // ... data to create a Refresh_tokens
     *   }
     * })
     * 
     */
    create<T extends refresh_tokensCreateArgs>(args: SelectSubset<T, refresh_tokensCreateArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Refresh_tokens.
     * @param {refresh_tokensCreateManyArgs} args - Arguments to create many Refresh_tokens.
     * @example
     * // Create many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refresh_tokensCreateManyArgs>(args?: SelectSubset<T, refresh_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refresh_tokens and returns the data saved in the database.
     * @param {refresh_tokensCreateManyAndReturnArgs} args - Arguments to create many Refresh_tokens.
     * @example
     * // Create many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refresh_tokens and only return the `token_id`
     * const refresh_tokensWithToken_idOnly = await prisma.refresh_tokens.createManyAndReturn({ 
     *   select: { token_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends refresh_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, refresh_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Refresh_tokens.
     * @param {refresh_tokensDeleteArgs} args - Arguments to delete one Refresh_tokens.
     * @example
     * // Delete one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.delete({
     *   where: {
     *     // ... filter to delete one Refresh_tokens
     *   }
     * })
     * 
     */
    delete<T extends refresh_tokensDeleteArgs>(args: SelectSubset<T, refresh_tokensDeleteArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Refresh_tokens.
     * @param {refresh_tokensUpdateArgs} args - Arguments to update one Refresh_tokens.
     * @example
     * // Update one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refresh_tokensUpdateArgs>(args: SelectSubset<T, refresh_tokensUpdateArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Refresh_tokens.
     * @param {refresh_tokensDeleteManyArgs} args - Arguments to filter Refresh_tokens to delete.
     * @example
     * // Delete a few Refresh_tokens
     * const { count } = await prisma.refresh_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refresh_tokensDeleteManyArgs>(args?: SelectSubset<T, refresh_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refresh_tokensUpdateManyArgs>(args: SelectSubset<T, refresh_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refresh_tokens.
     * @param {refresh_tokensUpsertArgs} args - Arguments to update or create a Refresh_tokens.
     * @example
     * // Update or create a Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.upsert({
     *   create: {
     *     // ... data to create a Refresh_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to update
     *   }
     * })
     */
    upsert<T extends refresh_tokensUpsertArgs>(args: SelectSubset<T, refresh_tokensUpsertArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensCountArgs} args - Arguments to filter Refresh_tokens to count.
     * @example
     * // Count the number of Refresh_tokens
     * const count = await prisma.refresh_tokens.count({
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to count
     *   }
     * })
    **/
    count<T extends refresh_tokensCountArgs>(
      args?: Subset<T, refresh_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Refresh_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Refresh_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Refresh_tokensAggregateArgs>(args: Subset<T, Refresh_tokensAggregateArgs>): Prisma.PrismaPromise<GetRefresh_tokensAggregateType<T>>

    /**
     * Group by Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends refresh_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refresh_tokensGroupByArgs['orderBy'] }
        : { orderBy?: refresh_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, refresh_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefresh_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refresh_tokens model
   */
  readonly fields: refresh_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refresh_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refresh_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends refresh_tokens$usersArgs<ExtArgs> = {}>(args?: Subset<T, refresh_tokens$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the refresh_tokens model
   */ 
  interface refresh_tokensFieldRefs {
    readonly token_id: FieldRef<"refresh_tokens", 'String'>
    readonly user_id: FieldRef<"refresh_tokens", 'String'>
    readonly client_id: FieldRef<"refresh_tokens", 'String'>
    readonly scope: FieldRef<"refresh_tokens", 'String'>
    readonly expires_at: FieldRef<"refresh_tokens", 'DateTime'>
    readonly created_at: FieldRef<"refresh_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * refresh_tokens findUnique
   */
  export type refresh_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens findUniqueOrThrow
   */
  export type refresh_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens findFirst
   */
  export type refresh_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens findFirstOrThrow
   */
  export type refresh_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens findMany
   */
  export type refresh_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens create
   */
  export type refresh_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a refresh_tokens.
     */
    data: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
  }

  /**
   * refresh_tokens createMany
   */
  export type refresh_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refresh_tokens.
     */
    data: refresh_tokensCreateManyInput | refresh_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refresh_tokens createManyAndReturn
   */
  export type refresh_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many refresh_tokens.
     */
    data: refresh_tokensCreateManyInput | refresh_tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * refresh_tokens update
   */
  export type refresh_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
    /**
     * Choose, which refresh_tokens to update.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens updateMany
   */
  export type refresh_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyInput>
    /**
     * Filter which refresh_tokens to update
     */
    where?: refresh_tokensWhereInput
  }

  /**
   * refresh_tokens upsert
   */
  export type refresh_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the refresh_tokens to update in case it exists.
     */
    where: refresh_tokensWhereUniqueInput
    /**
     * In case the refresh_tokens found by the `where` argument doesn't exist, create a new refresh_tokens with this data.
     */
    create: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
    /**
     * In case the refresh_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
  }

  /**
   * refresh_tokens delete
   */
  export type refresh_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter which refresh_tokens to delete.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens deleteMany
   */
  export type refresh_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to delete
     */
    where?: refresh_tokensWhereInput
  }

  /**
   * refresh_tokens.users
   */
  export type refresh_tokens$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * refresh_tokens without action
   */
  export type refresh_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    session_token: string | null
    user_id: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    session_token: string | null
    user_id: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    session_token: number
    user_id: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires_at?: true
    created_at?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires_at?: true
    created_at?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    session_token?: true
    user_id?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    session_token: string
    user_id: string | null
    expires_at: Date
    created_at: Date | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    users?: boolean | sessions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    users?: boolean | sessions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    session_token?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | sessions$usersArgs<ExtArgs>
  }
  export type sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | sessions$usersArgs<ExtArgs>
  }

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_token: string
      user_id: string | null
      expires_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends sessions$usersArgs<ExtArgs> = {}>(args?: Subset<T, sessions$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */ 
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'Int'>
    readonly session_token: FieldRef<"sessions", 'String'>
    readonly user_id: FieldRef<"sessions", 'String'>
    readonly expires_at: FieldRef<"sessions", 'DateTime'>
    readonly created_at: FieldRef<"sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
  }

  /**
   * sessions.users
   */
  export type sessions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password_hash: string | null
    password_salt: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password_hash: string | null
    password_salt: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password_hash: number
    password_salt: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password_hash?: true
    password_salt?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password_hash?: true
    password_salt?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password_hash?: true
    password_salt?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password_hash?: boolean
    password_salt?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    programari?: boolean | users$programariArgs<ExtArgs>
    refresh_tokens?: boolean | users$refresh_tokensArgs<ExtArgs>
    sessions?: boolean | users$sessionsArgs<ExtArgs>
    user_logs?: boolean | users$user_logsArgs<ExtArgs>
    medic_info?: boolean | users$medic_infoArgs<ExtArgs>
    programari_medic?: boolean | users$programari_medicArgs<ExtArgs>
    program_lucru?: boolean | users$program_lucruArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password_hash?: boolean
    password_salt?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password_hash?: boolean
    password_salt?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programari?: boolean | users$programariArgs<ExtArgs>
    refresh_tokens?: boolean | users$refresh_tokensArgs<ExtArgs>
    sessions?: boolean | users$sessionsArgs<ExtArgs>
    user_logs?: boolean | users$user_logsArgs<ExtArgs>
    medic_info?: boolean | users$medic_infoArgs<ExtArgs>
    programari_medic?: boolean | users$programari_medicArgs<ExtArgs>
    program_lucru?: boolean | users$program_lucruArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      programari: Prisma.$programariPayload<ExtArgs>[]
      refresh_tokens: Prisma.$refresh_tokensPayload<ExtArgs>[]
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
      user_logs: Prisma.$user_logsPayload<ExtArgs>[]
      medic_info: Prisma.$medic_infoPayload<ExtArgs> | null
      programari_medic: Prisma.$programariPayload<ExtArgs>[]
      program_lucru: Prisma.$program_lucruPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password_hash: string
      password_salt: string
      role: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programari<T extends users$programariArgs<ExtArgs> = {}>(args?: Subset<T, users$programariArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "findMany"> | Null>
    refresh_tokens<T extends users$refresh_tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$refresh_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends users$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, users$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany"> | Null>
    user_logs<T extends users$user_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "findMany"> | Null>
    medic_info<T extends users$medic_infoArgs<ExtArgs> = {}>(args?: Subset<T, users$medic_infoArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    programari_medic<T extends users$programari_medicArgs<ExtArgs> = {}>(args?: Subset<T, users$programari_medicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "findMany"> | Null>
    program_lucru<T extends users$program_lucruArgs<ExtArgs> = {}>(args?: Subset<T, users$program_lucruArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly password_salt: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.programari
   */
  export type users$programariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    where?: programariWhereInput
    orderBy?: programariOrderByWithRelationInput | programariOrderByWithRelationInput[]
    cursor?: programariWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramariScalarFieldEnum | ProgramariScalarFieldEnum[]
  }

  /**
   * users.refresh_tokens
   */
  export type users$refresh_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    where?: refresh_tokensWhereInput
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    cursor?: refresh_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * users.sessions
   */
  export type users$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * users.user_logs
   */
  export type users$user_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    where?: user_logsWhereInput
    orderBy?: user_logsOrderByWithRelationInput | user_logsOrderByWithRelationInput[]
    cursor?: user_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_logsScalarFieldEnum | User_logsScalarFieldEnum[]
  }

  /**
   * users.medic_info
   */
  export type users$medic_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    where?: medic_infoWhereInput
  }

  /**
   * users.programari_medic
   */
  export type users$programari_medicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    where?: programariWhereInput
    orderBy?: programariOrderByWithRelationInput | programariOrderByWithRelationInput[]
    cursor?: programariWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramariScalarFieldEnum | ProgramariScalarFieldEnum[]
  }

  /**
   * users.program_lucru
   */
  export type users$program_lucruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    where?: program_lucruWhereInput
    orderBy?: program_lucruOrderByWithRelationInput | program_lucruOrderByWithRelationInput[]
    cursor?: program_lucruWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Program_lucruScalarFieldEnum | Program_lucruScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model programari
   */

  export type AggregateProgramari = {
    _count: ProgramariCountAggregateOutputType | null
    _avg: ProgramariAvgAggregateOutputType | null
    _sum: ProgramariSumAggregateOutputType | null
    _min: ProgramariMinAggregateOutputType | null
    _max: ProgramariMaxAggregateOutputType | null
  }

  export type ProgramariAvgAggregateOutputType = {
    id: number | null
  }

  export type ProgramariSumAggregateOutputType = {
    id: number | null
  }

  export type ProgramariMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    medic_id: string | null
    serviciu: string | null
    data_programare: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProgramariMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    medic_id: string | null
    serviciu: string | null
    data_programare: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProgramariCountAggregateOutputType = {
    id: number
    user_id: number
    medic_id: number
    serviciu: number
    data_programare: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProgramariAvgAggregateInputType = {
    id?: true
  }

  export type ProgramariSumAggregateInputType = {
    id?: true
  }

  export type ProgramariMinAggregateInputType = {
    id?: true
    user_id?: true
    medic_id?: true
    serviciu?: true
    data_programare?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ProgramariMaxAggregateInputType = {
    id?: true
    user_id?: true
    medic_id?: true
    serviciu?: true
    data_programare?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ProgramariCountAggregateInputType = {
    id?: true
    user_id?: true
    medic_id?: true
    serviciu?: true
    data_programare?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProgramariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programari to aggregate.
     */
    where?: programariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programaris to fetch.
     */
    orderBy?: programariOrderByWithRelationInput | programariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: programariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned programaris
    **/
    _count?: true | ProgramariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramariAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramariSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramariMaxAggregateInputType
  }

  export type GetProgramariAggregateType<T extends ProgramariAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramari[P]>
      : GetScalarType<T[P], AggregateProgramari[P]>
  }




  export type programariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programariWhereInput
    orderBy?: programariOrderByWithAggregationInput | programariOrderByWithAggregationInput[]
    by: ProgramariScalarFieldEnum[] | ProgramariScalarFieldEnum
    having?: programariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramariCountAggregateInputType | true
    _avg?: ProgramariAvgAggregateInputType
    _sum?: ProgramariSumAggregateInputType
    _min?: ProgramariMinAggregateInputType
    _max?: ProgramariMaxAggregateInputType
  }

  export type ProgramariGroupByOutputType = {
    id: number
    user_id: string
    medic_id: string
    serviciu: string
    data_programare: Date
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProgramariCountAggregateOutputType | null
    _avg: ProgramariAvgAggregateOutputType | null
    _sum: ProgramariSumAggregateOutputType | null
    _min: ProgramariMinAggregateOutputType | null
    _max: ProgramariMaxAggregateOutputType | null
  }

  type GetProgramariGroupByPayload<T extends programariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramariGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramariGroupByOutputType[P]>
        }
      >
    >


  export type programariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medic_id?: boolean
    serviciu?: boolean
    data_programare?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programari"]>

  export type programariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    medic_id?: boolean
    serviciu?: boolean
    data_programare?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programari"]>

  export type programariSelectScalar = {
    id?: boolean
    user_id?: boolean
    medic_id?: boolean
    serviciu?: boolean
    data_programare?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type programariInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type programariIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $programariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "programari"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      medic: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      medic_id: string
      serviciu: string
      data_programare: Date
      status: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["programari"]>
    composites: {}
  }

  type programariGetPayload<S extends boolean | null | undefined | programariDefaultArgs> = $Result.GetResult<Prisma.$programariPayload, S>

  type programariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<programariFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgramariCountAggregateInputType | true
    }

  export interface programariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['programari'], meta: { name: 'programari' } }
    /**
     * Find zero or one Programari that matches the filter.
     * @param {programariFindUniqueArgs} args - Arguments to find a Programari
     * @example
     * // Get one Programari
     * const programari = await prisma.programari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends programariFindUniqueArgs>(args: SelectSubset<T, programariFindUniqueArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Programari that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {programariFindUniqueOrThrowArgs} args - Arguments to find a Programari
     * @example
     * // Get one Programari
     * const programari = await prisma.programari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends programariFindUniqueOrThrowArgs>(args: SelectSubset<T, programariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Programari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programariFindFirstArgs} args - Arguments to find a Programari
     * @example
     * // Get one Programari
     * const programari = await prisma.programari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends programariFindFirstArgs>(args?: SelectSubset<T, programariFindFirstArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Programari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programariFindFirstOrThrowArgs} args - Arguments to find a Programari
     * @example
     * // Get one Programari
     * const programari = await prisma.programari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends programariFindFirstOrThrowArgs>(args?: SelectSubset<T, programariFindFirstOrThrowArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Programaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programaris
     * const programaris = await prisma.programari.findMany()
     * 
     * // Get first 10 Programaris
     * const programaris = await prisma.programari.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programariWithIdOnly = await prisma.programari.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends programariFindManyArgs>(args?: SelectSubset<T, programariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Programari.
     * @param {programariCreateArgs} args - Arguments to create a Programari.
     * @example
     * // Create one Programari
     * const Programari = await prisma.programari.create({
     *   data: {
     *     // ... data to create a Programari
     *   }
     * })
     * 
     */
    create<T extends programariCreateArgs>(args: SelectSubset<T, programariCreateArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Programaris.
     * @param {programariCreateManyArgs} args - Arguments to create many Programaris.
     * @example
     * // Create many Programaris
     * const programari = await prisma.programari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends programariCreateManyArgs>(args?: SelectSubset<T, programariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programaris and returns the data saved in the database.
     * @param {programariCreateManyAndReturnArgs} args - Arguments to create many Programaris.
     * @example
     * // Create many Programaris
     * const programari = await prisma.programari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programaris and only return the `id`
     * const programariWithIdOnly = await prisma.programari.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends programariCreateManyAndReturnArgs>(args?: SelectSubset<T, programariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Programari.
     * @param {programariDeleteArgs} args - Arguments to delete one Programari.
     * @example
     * // Delete one Programari
     * const Programari = await prisma.programari.delete({
     *   where: {
     *     // ... filter to delete one Programari
     *   }
     * })
     * 
     */
    delete<T extends programariDeleteArgs>(args: SelectSubset<T, programariDeleteArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Programari.
     * @param {programariUpdateArgs} args - Arguments to update one Programari.
     * @example
     * // Update one Programari
     * const programari = await prisma.programari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends programariUpdateArgs>(args: SelectSubset<T, programariUpdateArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Programaris.
     * @param {programariDeleteManyArgs} args - Arguments to filter Programaris to delete.
     * @example
     * // Delete a few Programaris
     * const { count } = await prisma.programari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends programariDeleteManyArgs>(args?: SelectSubset<T, programariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programaris
     * const programari = await prisma.programari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends programariUpdateManyArgs>(args: SelectSubset<T, programariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Programari.
     * @param {programariUpsertArgs} args - Arguments to update or create a Programari.
     * @example
     * // Update or create a Programari
     * const programari = await prisma.programari.upsert({
     *   create: {
     *     // ... data to create a Programari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Programari we want to update
     *   }
     * })
     */
    upsert<T extends programariUpsertArgs>(args: SelectSubset<T, programariUpsertArgs<ExtArgs>>): Prisma__programariClient<$Result.GetResult<Prisma.$programariPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Programaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programariCountArgs} args - Arguments to filter Programaris to count.
     * @example
     * // Count the number of Programaris
     * const count = await prisma.programari.count({
     *   where: {
     *     // ... the filter for the Programaris we want to count
     *   }
     * })
    **/
    count<T extends programariCountArgs>(
      args?: Subset<T, programariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Programari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramariAggregateArgs>(args: Subset<T, ProgramariAggregateArgs>): Prisma.PrismaPromise<GetProgramariAggregateType<T>>

    /**
     * Group by Programari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programariGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends programariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: programariGroupByArgs['orderBy'] }
        : { orderBy?: programariGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, programariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the programari model
   */
  readonly fields: programariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for programari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__programariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    medic<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the programari model
   */ 
  interface programariFieldRefs {
    readonly id: FieldRef<"programari", 'Int'>
    readonly user_id: FieldRef<"programari", 'String'>
    readonly medic_id: FieldRef<"programari", 'String'>
    readonly serviciu: FieldRef<"programari", 'String'>
    readonly data_programare: FieldRef<"programari", 'DateTime'>
    readonly status: FieldRef<"programari", 'String'>
    readonly created_at: FieldRef<"programari", 'DateTime'>
    readonly updated_at: FieldRef<"programari", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * programari findUnique
   */
  export type programariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * Filter, which programari to fetch.
     */
    where: programariWhereUniqueInput
  }

  /**
   * programari findUniqueOrThrow
   */
  export type programariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * Filter, which programari to fetch.
     */
    where: programariWhereUniqueInput
  }

  /**
   * programari findFirst
   */
  export type programariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * Filter, which programari to fetch.
     */
    where?: programariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programaris to fetch.
     */
    orderBy?: programariOrderByWithRelationInput | programariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programaris.
     */
    cursor?: programariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programaris.
     */
    distinct?: ProgramariScalarFieldEnum | ProgramariScalarFieldEnum[]
  }

  /**
   * programari findFirstOrThrow
   */
  export type programariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * Filter, which programari to fetch.
     */
    where?: programariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programaris to fetch.
     */
    orderBy?: programariOrderByWithRelationInput | programariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programaris.
     */
    cursor?: programariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programaris.
     */
    distinct?: ProgramariScalarFieldEnum | ProgramariScalarFieldEnum[]
  }

  /**
   * programari findMany
   */
  export type programariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * Filter, which programaris to fetch.
     */
    where?: programariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programaris to fetch.
     */
    orderBy?: programariOrderByWithRelationInput | programariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing programaris.
     */
    cursor?: programariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programaris.
     */
    skip?: number
    distinct?: ProgramariScalarFieldEnum | ProgramariScalarFieldEnum[]
  }

  /**
   * programari create
   */
  export type programariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * The data needed to create a programari.
     */
    data: XOR<programariCreateInput, programariUncheckedCreateInput>
  }

  /**
   * programari createMany
   */
  export type programariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many programaris.
     */
    data: programariCreateManyInput | programariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * programari createManyAndReturn
   */
  export type programariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many programaris.
     */
    data: programariCreateManyInput | programariCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * programari update
   */
  export type programariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * The data needed to update a programari.
     */
    data: XOR<programariUpdateInput, programariUncheckedUpdateInput>
    /**
     * Choose, which programari to update.
     */
    where: programariWhereUniqueInput
  }

  /**
   * programari updateMany
   */
  export type programariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update programaris.
     */
    data: XOR<programariUpdateManyMutationInput, programariUncheckedUpdateManyInput>
    /**
     * Filter which programaris to update
     */
    where?: programariWhereInput
  }

  /**
   * programari upsert
   */
  export type programariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * The filter to search for the programari to update in case it exists.
     */
    where: programariWhereUniqueInput
    /**
     * In case the programari found by the `where` argument doesn't exist, create a new programari with this data.
     */
    create: XOR<programariCreateInput, programariUncheckedCreateInput>
    /**
     * In case the programari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<programariUpdateInput, programariUncheckedUpdateInput>
  }

  /**
   * programari delete
   */
  export type programariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
    /**
     * Filter which programari to delete.
     */
    where: programariWhereUniqueInput
  }

  /**
   * programari deleteMany
   */
  export type programariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programaris to delete
     */
    where?: programariWhereInput
  }

  /**
   * programari without action
   */
  export type programariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programari
     */
    select?: programariSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programariInclude<ExtArgs> | null
  }


  /**
   * Model medic_info
   */

  export type AggregateMedic_info = {
    _count: Medic_infoCountAggregateOutputType | null
    _avg: Medic_infoAvgAggregateOutputType | null
    _sum: Medic_infoSumAggregateOutputType | null
    _min: Medic_infoMinAggregateOutputType | null
    _max: Medic_infoMaxAggregateOutputType | null
  }

  export type Medic_infoAvgAggregateOutputType = {
    specialitate_id: number | null
    experienta_ani: number | null
    pret_consultatie: number | null
    rating: number | null
  }

  export type Medic_infoSumAggregateOutputType = {
    specialitate_id: number | null
    experienta_ani: number | null
    pret_consultatie: number | null
    rating: number | null
  }

  export type Medic_infoMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    specialitate_id: number | null
    titlu: string | null
    experienta_ani: number | null
    telefon: string | null
    cabinet: string | null
    pret_consultatie: number | null
    bio: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Medic_infoMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    specialitate_id: number | null
    titlu: string | null
    experienta_ani: number | null
    telefon: string | null
    cabinet: string | null
    pret_consultatie: number | null
    bio: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Medic_infoCountAggregateOutputType = {
    id: number
    user_id: number
    specialitate_id: number
    titlu: number
    experienta_ani: number
    telefon: number
    cabinet: number
    pret_consultatie: number
    bio: number
    rating: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Medic_infoAvgAggregateInputType = {
    specialitate_id?: true
    experienta_ani?: true
    pret_consultatie?: true
    rating?: true
  }

  export type Medic_infoSumAggregateInputType = {
    specialitate_id?: true
    experienta_ani?: true
    pret_consultatie?: true
    rating?: true
  }

  export type Medic_infoMinAggregateInputType = {
    id?: true
    user_id?: true
    specialitate_id?: true
    titlu?: true
    experienta_ani?: true
    telefon?: true
    cabinet?: true
    pret_consultatie?: true
    bio?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type Medic_infoMaxAggregateInputType = {
    id?: true
    user_id?: true
    specialitate_id?: true
    titlu?: true
    experienta_ani?: true
    telefon?: true
    cabinet?: true
    pret_consultatie?: true
    bio?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type Medic_infoCountAggregateInputType = {
    id?: true
    user_id?: true
    specialitate_id?: true
    titlu?: true
    experienta_ani?: true
    telefon?: true
    cabinet?: true
    pret_consultatie?: true
    bio?: true
    rating?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Medic_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medic_info to aggregate.
     */
    where?: medic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medic_infos to fetch.
     */
    orderBy?: medic_infoOrderByWithRelationInput | medic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medic_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medic_infos
    **/
    _count?: true | Medic_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medic_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medic_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medic_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medic_infoMaxAggregateInputType
  }

  export type GetMedic_infoAggregateType<T extends Medic_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedic_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedic_info[P]>
      : GetScalarType<T[P], AggregateMedic_info[P]>
  }




  export type medic_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medic_infoWhereInput
    orderBy?: medic_infoOrderByWithAggregationInput | medic_infoOrderByWithAggregationInput[]
    by: Medic_infoScalarFieldEnum[] | Medic_infoScalarFieldEnum
    having?: medic_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medic_infoCountAggregateInputType | true
    _avg?: Medic_infoAvgAggregateInputType
    _sum?: Medic_infoSumAggregateInputType
    _min?: Medic_infoMinAggregateInputType
    _max?: Medic_infoMaxAggregateInputType
  }

  export type Medic_infoGroupByOutputType = {
    id: string
    user_id: string
    specialitate_id: number
    titlu: string | null
    experienta_ani: number | null
    telefon: string | null
    cabinet: string | null
    pret_consultatie: number | null
    bio: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: Medic_infoCountAggregateOutputType | null
    _avg: Medic_infoAvgAggregateOutputType | null
    _sum: Medic_infoSumAggregateOutputType | null
    _min: Medic_infoMinAggregateOutputType | null
    _max: Medic_infoMaxAggregateOutputType | null
  }

  type GetMedic_infoGroupByPayload<T extends medic_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medic_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medic_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medic_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Medic_infoGroupByOutputType[P]>
        }
      >
    >


  export type medic_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    specialitate_id?: boolean
    titlu?: boolean
    experienta_ani?: boolean
    telefon?: boolean
    cabinet?: boolean
    pret_consultatie?: boolean
    bio?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    specialitate?: boolean | specialitatiDefaultArgs<ExtArgs>
    program_lucru?: boolean | medic_info$program_lucruArgs<ExtArgs>
    _count?: boolean | Medic_infoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medic_info"]>

  export type medic_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    specialitate_id?: boolean
    titlu?: boolean
    experienta_ani?: boolean
    telefon?: boolean
    cabinet?: boolean
    pret_consultatie?: boolean
    bio?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    specialitate?: boolean | specialitatiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medic_info"]>

  export type medic_infoSelectScalar = {
    id?: boolean
    user_id?: boolean
    specialitate_id?: boolean
    titlu?: boolean
    experienta_ani?: boolean
    telefon?: boolean
    cabinet?: boolean
    pret_consultatie?: boolean
    bio?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type medic_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    specialitate?: boolean | specialitatiDefaultArgs<ExtArgs>
    program_lucru?: boolean | medic_info$program_lucruArgs<ExtArgs>
    _count?: boolean | Medic_infoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type medic_infoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    specialitate?: boolean | specialitatiDefaultArgs<ExtArgs>
  }

  export type $medic_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medic_info"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      specialitate: Prisma.$specialitatiPayload<ExtArgs>
      program_lucru: Prisma.$program_lucruPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      specialitate_id: number
      titlu: string | null
      experienta_ani: number | null
      telefon: string | null
      cabinet: string | null
      pret_consultatie: number | null
      bio: string | null
      rating: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["medic_info"]>
    composites: {}
  }

  type medic_infoGetPayload<S extends boolean | null | undefined | medic_infoDefaultArgs> = $Result.GetResult<Prisma.$medic_infoPayload, S>

  type medic_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<medic_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Medic_infoCountAggregateInputType | true
    }

  export interface medic_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medic_info'], meta: { name: 'medic_info' } }
    /**
     * Find zero or one Medic_info that matches the filter.
     * @param {medic_infoFindUniqueArgs} args - Arguments to find a Medic_info
     * @example
     * // Get one Medic_info
     * const medic_info = await prisma.medic_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medic_infoFindUniqueArgs>(args: SelectSubset<T, medic_infoFindUniqueArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medic_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {medic_infoFindUniqueOrThrowArgs} args - Arguments to find a Medic_info
     * @example
     * // Get one Medic_info
     * const medic_info = await prisma.medic_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medic_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, medic_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medic_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medic_infoFindFirstArgs} args - Arguments to find a Medic_info
     * @example
     * // Get one Medic_info
     * const medic_info = await prisma.medic_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medic_infoFindFirstArgs>(args?: SelectSubset<T, medic_infoFindFirstArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medic_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medic_infoFindFirstOrThrowArgs} args - Arguments to find a Medic_info
     * @example
     * // Get one Medic_info
     * const medic_info = await prisma.medic_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medic_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, medic_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medic_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medic_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medic_infos
     * const medic_infos = await prisma.medic_info.findMany()
     * 
     * // Get first 10 Medic_infos
     * const medic_infos = await prisma.medic_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medic_infoWithIdOnly = await prisma.medic_info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends medic_infoFindManyArgs>(args?: SelectSubset<T, medic_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medic_info.
     * @param {medic_infoCreateArgs} args - Arguments to create a Medic_info.
     * @example
     * // Create one Medic_info
     * const Medic_info = await prisma.medic_info.create({
     *   data: {
     *     // ... data to create a Medic_info
     *   }
     * })
     * 
     */
    create<T extends medic_infoCreateArgs>(args: SelectSubset<T, medic_infoCreateArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medic_infos.
     * @param {medic_infoCreateManyArgs} args - Arguments to create many Medic_infos.
     * @example
     * // Create many Medic_infos
     * const medic_info = await prisma.medic_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medic_infoCreateManyArgs>(args?: SelectSubset<T, medic_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medic_infos and returns the data saved in the database.
     * @param {medic_infoCreateManyAndReturnArgs} args - Arguments to create many Medic_infos.
     * @example
     * // Create many Medic_infos
     * const medic_info = await prisma.medic_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medic_infos and only return the `id`
     * const medic_infoWithIdOnly = await prisma.medic_info.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends medic_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, medic_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Medic_info.
     * @param {medic_infoDeleteArgs} args - Arguments to delete one Medic_info.
     * @example
     * // Delete one Medic_info
     * const Medic_info = await prisma.medic_info.delete({
     *   where: {
     *     // ... filter to delete one Medic_info
     *   }
     * })
     * 
     */
    delete<T extends medic_infoDeleteArgs>(args: SelectSubset<T, medic_infoDeleteArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medic_info.
     * @param {medic_infoUpdateArgs} args - Arguments to update one Medic_info.
     * @example
     * // Update one Medic_info
     * const medic_info = await prisma.medic_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medic_infoUpdateArgs>(args: SelectSubset<T, medic_infoUpdateArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medic_infos.
     * @param {medic_infoDeleteManyArgs} args - Arguments to filter Medic_infos to delete.
     * @example
     * // Delete a few Medic_infos
     * const { count } = await prisma.medic_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medic_infoDeleteManyArgs>(args?: SelectSubset<T, medic_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medic_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medic_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medic_infos
     * const medic_info = await prisma.medic_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medic_infoUpdateManyArgs>(args: SelectSubset<T, medic_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medic_info.
     * @param {medic_infoUpsertArgs} args - Arguments to update or create a Medic_info.
     * @example
     * // Update or create a Medic_info
     * const medic_info = await prisma.medic_info.upsert({
     *   create: {
     *     // ... data to create a Medic_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medic_info we want to update
     *   }
     * })
     */
    upsert<T extends medic_infoUpsertArgs>(args: SelectSubset<T, medic_infoUpsertArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medic_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medic_infoCountArgs} args - Arguments to filter Medic_infos to count.
     * @example
     * // Count the number of Medic_infos
     * const count = await prisma.medic_info.count({
     *   where: {
     *     // ... the filter for the Medic_infos we want to count
     *   }
     * })
    **/
    count<T extends medic_infoCountArgs>(
      args?: Subset<T, medic_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medic_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medic_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medic_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medic_infoAggregateArgs>(args: Subset<T, Medic_infoAggregateArgs>): Prisma.PrismaPromise<GetMedic_infoAggregateType<T>>

    /**
     * Group by Medic_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medic_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends medic_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medic_infoGroupByArgs['orderBy'] }
        : { orderBy?: medic_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, medic_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedic_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medic_info model
   */
  readonly fields: medic_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medic_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medic_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    specialitate<T extends specialitatiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, specialitatiDefaultArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    program_lucru<T extends medic_info$program_lucruArgs<ExtArgs> = {}>(args?: Subset<T, medic_info$program_lucruArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medic_info model
   */ 
  interface medic_infoFieldRefs {
    readonly id: FieldRef<"medic_info", 'String'>
    readonly user_id: FieldRef<"medic_info", 'String'>
    readonly specialitate_id: FieldRef<"medic_info", 'Int'>
    readonly titlu: FieldRef<"medic_info", 'String'>
    readonly experienta_ani: FieldRef<"medic_info", 'Int'>
    readonly telefon: FieldRef<"medic_info", 'String'>
    readonly cabinet: FieldRef<"medic_info", 'String'>
    readonly pret_consultatie: FieldRef<"medic_info", 'Int'>
    readonly bio: FieldRef<"medic_info", 'String'>
    readonly rating: FieldRef<"medic_info", 'Float'>
    readonly created_at: FieldRef<"medic_info", 'DateTime'>
    readonly updated_at: FieldRef<"medic_info", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * medic_info findUnique
   */
  export type medic_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * Filter, which medic_info to fetch.
     */
    where: medic_infoWhereUniqueInput
  }

  /**
   * medic_info findUniqueOrThrow
   */
  export type medic_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * Filter, which medic_info to fetch.
     */
    where: medic_infoWhereUniqueInput
  }

  /**
   * medic_info findFirst
   */
  export type medic_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * Filter, which medic_info to fetch.
     */
    where?: medic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medic_infos to fetch.
     */
    orderBy?: medic_infoOrderByWithRelationInput | medic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medic_infos.
     */
    cursor?: medic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medic_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medic_infos.
     */
    distinct?: Medic_infoScalarFieldEnum | Medic_infoScalarFieldEnum[]
  }

  /**
   * medic_info findFirstOrThrow
   */
  export type medic_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * Filter, which medic_info to fetch.
     */
    where?: medic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medic_infos to fetch.
     */
    orderBy?: medic_infoOrderByWithRelationInput | medic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medic_infos.
     */
    cursor?: medic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medic_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medic_infos.
     */
    distinct?: Medic_infoScalarFieldEnum | Medic_infoScalarFieldEnum[]
  }

  /**
   * medic_info findMany
   */
  export type medic_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * Filter, which medic_infos to fetch.
     */
    where?: medic_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medic_infos to fetch.
     */
    orderBy?: medic_infoOrderByWithRelationInput | medic_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medic_infos.
     */
    cursor?: medic_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medic_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medic_infos.
     */
    skip?: number
    distinct?: Medic_infoScalarFieldEnum | Medic_infoScalarFieldEnum[]
  }

  /**
   * medic_info create
   */
  export type medic_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * The data needed to create a medic_info.
     */
    data: XOR<medic_infoCreateInput, medic_infoUncheckedCreateInput>
  }

  /**
   * medic_info createMany
   */
  export type medic_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medic_infos.
     */
    data: medic_infoCreateManyInput | medic_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medic_info createManyAndReturn
   */
  export type medic_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many medic_infos.
     */
    data: medic_infoCreateManyInput | medic_infoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * medic_info update
   */
  export type medic_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * The data needed to update a medic_info.
     */
    data: XOR<medic_infoUpdateInput, medic_infoUncheckedUpdateInput>
    /**
     * Choose, which medic_info to update.
     */
    where: medic_infoWhereUniqueInput
  }

  /**
   * medic_info updateMany
   */
  export type medic_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medic_infos.
     */
    data: XOR<medic_infoUpdateManyMutationInput, medic_infoUncheckedUpdateManyInput>
    /**
     * Filter which medic_infos to update
     */
    where?: medic_infoWhereInput
  }

  /**
   * medic_info upsert
   */
  export type medic_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * The filter to search for the medic_info to update in case it exists.
     */
    where: medic_infoWhereUniqueInput
    /**
     * In case the medic_info found by the `where` argument doesn't exist, create a new medic_info with this data.
     */
    create: XOR<medic_infoCreateInput, medic_infoUncheckedCreateInput>
    /**
     * In case the medic_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medic_infoUpdateInput, medic_infoUncheckedUpdateInput>
  }

  /**
   * medic_info delete
   */
  export type medic_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    /**
     * Filter which medic_info to delete.
     */
    where: medic_infoWhereUniqueInput
  }

  /**
   * medic_info deleteMany
   */
  export type medic_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medic_infos to delete
     */
    where?: medic_infoWhereInput
  }

  /**
   * medic_info.program_lucru
   */
  export type medic_info$program_lucruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    where?: program_lucruWhereInput
    orderBy?: program_lucruOrderByWithRelationInput | program_lucruOrderByWithRelationInput[]
    cursor?: program_lucruWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Program_lucruScalarFieldEnum | Program_lucruScalarFieldEnum[]
  }

  /**
   * medic_info without action
   */
  export type medic_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
  }


  /**
   * Model specialitati
   */

  export type AggregateSpecialitati = {
    _count: SpecialitatiCountAggregateOutputType | null
    _avg: SpecialitatiAvgAggregateOutputType | null
    _sum: SpecialitatiSumAggregateOutputType | null
    _min: SpecialitatiMinAggregateOutputType | null
    _max: SpecialitatiMaxAggregateOutputType | null
  }

  export type SpecialitatiAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialitatiSumAggregateOutputType = {
    id: number | null
  }

  export type SpecialitatiMinAggregateOutputType = {
    id: number | null
    nume: string | null
    descriere: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpecialitatiMaxAggregateOutputType = {
    id: number | null
    nume: string | null
    descriere: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SpecialitatiCountAggregateOutputType = {
    id: number
    nume: number
    descriere: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SpecialitatiAvgAggregateInputType = {
    id?: true
  }

  export type SpecialitatiSumAggregateInputType = {
    id?: true
  }

  export type SpecialitatiMinAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    created_at?: true
    updated_at?: true
  }

  export type SpecialitatiMaxAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    created_at?: true
    updated_at?: true
  }

  export type SpecialitatiCountAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SpecialitatiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specialitati to aggregate.
     */
    where?: specialitatiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialitatis to fetch.
     */
    orderBy?: specialitatiOrderByWithRelationInput | specialitatiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: specialitatiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialitatis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialitatis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned specialitatis
    **/
    _count?: true | SpecialitatiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialitatiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialitatiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialitatiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialitatiMaxAggregateInputType
  }

  export type GetSpecialitatiAggregateType<T extends SpecialitatiAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialitati]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialitati[P]>
      : GetScalarType<T[P], AggregateSpecialitati[P]>
  }




  export type specialitatiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: specialitatiWhereInput
    orderBy?: specialitatiOrderByWithAggregationInput | specialitatiOrderByWithAggregationInput[]
    by: SpecialitatiScalarFieldEnum[] | SpecialitatiScalarFieldEnum
    having?: specialitatiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialitatiCountAggregateInputType | true
    _avg?: SpecialitatiAvgAggregateInputType
    _sum?: SpecialitatiSumAggregateInputType
    _min?: SpecialitatiMinAggregateInputType
    _max?: SpecialitatiMaxAggregateInputType
  }

  export type SpecialitatiGroupByOutputType = {
    id: number
    nume: string
    descriere: string | null
    created_at: Date
    updated_at: Date
    _count: SpecialitatiCountAggregateOutputType | null
    _avg: SpecialitatiAvgAggregateOutputType | null
    _sum: SpecialitatiSumAggregateOutputType | null
    _min: SpecialitatiMinAggregateOutputType | null
    _max: SpecialitatiMaxAggregateOutputType | null
  }

  type GetSpecialitatiGroupByPayload<T extends specialitatiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialitatiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialitatiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialitatiGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialitatiGroupByOutputType[P]>
        }
      >
    >


  export type specialitatiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    created_at?: boolean
    updated_at?: boolean
    medic_info?: boolean | specialitati$medic_infoArgs<ExtArgs>
    _count?: boolean | SpecialitatiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialitati"]>

  export type specialitatiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["specialitati"]>

  export type specialitatiSelectScalar = {
    id?: boolean
    nume?: boolean
    descriere?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type specialitatiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medic_info?: boolean | specialitati$medic_infoArgs<ExtArgs>
    _count?: boolean | SpecialitatiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type specialitatiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $specialitatiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "specialitati"
    objects: {
      medic_info: Prisma.$medic_infoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nume: string
      descriere: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["specialitati"]>
    composites: {}
  }

  type specialitatiGetPayload<S extends boolean | null | undefined | specialitatiDefaultArgs> = $Result.GetResult<Prisma.$specialitatiPayload, S>

  type specialitatiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<specialitatiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpecialitatiCountAggregateInputType | true
    }

  export interface specialitatiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['specialitati'], meta: { name: 'specialitati' } }
    /**
     * Find zero or one Specialitati that matches the filter.
     * @param {specialitatiFindUniqueArgs} args - Arguments to find a Specialitati
     * @example
     * // Get one Specialitati
     * const specialitati = await prisma.specialitati.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends specialitatiFindUniqueArgs>(args: SelectSubset<T, specialitatiFindUniqueArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Specialitati that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {specialitatiFindUniqueOrThrowArgs} args - Arguments to find a Specialitati
     * @example
     * // Get one Specialitati
     * const specialitati = await prisma.specialitati.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends specialitatiFindUniqueOrThrowArgs>(args: SelectSubset<T, specialitatiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Specialitati that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitatiFindFirstArgs} args - Arguments to find a Specialitati
     * @example
     * // Get one Specialitati
     * const specialitati = await prisma.specialitati.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends specialitatiFindFirstArgs>(args?: SelectSubset<T, specialitatiFindFirstArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Specialitati that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitatiFindFirstOrThrowArgs} args - Arguments to find a Specialitati
     * @example
     * // Get one Specialitati
     * const specialitati = await prisma.specialitati.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends specialitatiFindFirstOrThrowArgs>(args?: SelectSubset<T, specialitatiFindFirstOrThrowArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Specialitatis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitatiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialitatis
     * const specialitatis = await prisma.specialitati.findMany()
     * 
     * // Get first 10 Specialitatis
     * const specialitatis = await prisma.specialitati.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialitatiWithIdOnly = await prisma.specialitati.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends specialitatiFindManyArgs>(args?: SelectSubset<T, specialitatiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Specialitati.
     * @param {specialitatiCreateArgs} args - Arguments to create a Specialitati.
     * @example
     * // Create one Specialitati
     * const Specialitati = await prisma.specialitati.create({
     *   data: {
     *     // ... data to create a Specialitati
     *   }
     * })
     * 
     */
    create<T extends specialitatiCreateArgs>(args: SelectSubset<T, specialitatiCreateArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Specialitatis.
     * @param {specialitatiCreateManyArgs} args - Arguments to create many Specialitatis.
     * @example
     * // Create many Specialitatis
     * const specialitati = await prisma.specialitati.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends specialitatiCreateManyArgs>(args?: SelectSubset<T, specialitatiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialitatis and returns the data saved in the database.
     * @param {specialitatiCreateManyAndReturnArgs} args - Arguments to create many Specialitatis.
     * @example
     * // Create many Specialitatis
     * const specialitati = await prisma.specialitati.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialitatis and only return the `id`
     * const specialitatiWithIdOnly = await prisma.specialitati.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends specialitatiCreateManyAndReturnArgs>(args?: SelectSubset<T, specialitatiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Specialitati.
     * @param {specialitatiDeleteArgs} args - Arguments to delete one Specialitati.
     * @example
     * // Delete one Specialitati
     * const Specialitati = await prisma.specialitati.delete({
     *   where: {
     *     // ... filter to delete one Specialitati
     *   }
     * })
     * 
     */
    delete<T extends specialitatiDeleteArgs>(args: SelectSubset<T, specialitatiDeleteArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Specialitati.
     * @param {specialitatiUpdateArgs} args - Arguments to update one Specialitati.
     * @example
     * // Update one Specialitati
     * const specialitati = await prisma.specialitati.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends specialitatiUpdateArgs>(args: SelectSubset<T, specialitatiUpdateArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Specialitatis.
     * @param {specialitatiDeleteManyArgs} args - Arguments to filter Specialitatis to delete.
     * @example
     * // Delete a few Specialitatis
     * const { count } = await prisma.specialitati.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends specialitatiDeleteManyArgs>(args?: SelectSubset<T, specialitatiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialitatis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitatiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialitatis
     * const specialitati = await prisma.specialitati.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends specialitatiUpdateManyArgs>(args: SelectSubset<T, specialitatiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Specialitati.
     * @param {specialitatiUpsertArgs} args - Arguments to update or create a Specialitati.
     * @example
     * // Update or create a Specialitati
     * const specialitati = await prisma.specialitati.upsert({
     *   create: {
     *     // ... data to create a Specialitati
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialitati we want to update
     *   }
     * })
     */
    upsert<T extends specialitatiUpsertArgs>(args: SelectSubset<T, specialitatiUpsertArgs<ExtArgs>>): Prisma__specialitatiClient<$Result.GetResult<Prisma.$specialitatiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Specialitatis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitatiCountArgs} args - Arguments to filter Specialitatis to count.
     * @example
     * // Count the number of Specialitatis
     * const count = await prisma.specialitati.count({
     *   where: {
     *     // ... the filter for the Specialitatis we want to count
     *   }
     * })
    **/
    count<T extends specialitatiCountArgs>(
      args?: Subset<T, specialitatiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialitatiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialitati.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialitatiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialitatiAggregateArgs>(args: Subset<T, SpecialitatiAggregateArgs>): Prisma.PrismaPromise<GetSpecialitatiAggregateType<T>>

    /**
     * Group by Specialitati.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specialitatiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends specialitatiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: specialitatiGroupByArgs['orderBy'] }
        : { orderBy?: specialitatiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, specialitatiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialitatiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the specialitati model
   */
  readonly fields: specialitatiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for specialitati.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__specialitatiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medic_info<T extends specialitati$medic_infoArgs<ExtArgs> = {}>(args?: Subset<T, specialitati$medic_infoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the specialitati model
   */ 
  interface specialitatiFieldRefs {
    readonly id: FieldRef<"specialitati", 'Int'>
    readonly nume: FieldRef<"specialitati", 'String'>
    readonly descriere: FieldRef<"specialitati", 'String'>
    readonly created_at: FieldRef<"specialitati", 'DateTime'>
    readonly updated_at: FieldRef<"specialitati", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * specialitati findUnique
   */
  export type specialitatiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * Filter, which specialitati to fetch.
     */
    where: specialitatiWhereUniqueInput
  }

  /**
   * specialitati findUniqueOrThrow
   */
  export type specialitatiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * Filter, which specialitati to fetch.
     */
    where: specialitatiWhereUniqueInput
  }

  /**
   * specialitati findFirst
   */
  export type specialitatiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * Filter, which specialitati to fetch.
     */
    where?: specialitatiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialitatis to fetch.
     */
    orderBy?: specialitatiOrderByWithRelationInput | specialitatiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specialitatis.
     */
    cursor?: specialitatiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialitatis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialitatis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specialitatis.
     */
    distinct?: SpecialitatiScalarFieldEnum | SpecialitatiScalarFieldEnum[]
  }

  /**
   * specialitati findFirstOrThrow
   */
  export type specialitatiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * Filter, which specialitati to fetch.
     */
    where?: specialitatiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialitatis to fetch.
     */
    orderBy?: specialitatiOrderByWithRelationInput | specialitatiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specialitatis.
     */
    cursor?: specialitatiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialitatis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialitatis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specialitatis.
     */
    distinct?: SpecialitatiScalarFieldEnum | SpecialitatiScalarFieldEnum[]
  }

  /**
   * specialitati findMany
   */
  export type specialitatiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * Filter, which specialitatis to fetch.
     */
    where?: specialitatiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specialitatis to fetch.
     */
    orderBy?: specialitatiOrderByWithRelationInput | specialitatiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing specialitatis.
     */
    cursor?: specialitatiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specialitatis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specialitatis.
     */
    skip?: number
    distinct?: SpecialitatiScalarFieldEnum | SpecialitatiScalarFieldEnum[]
  }

  /**
   * specialitati create
   */
  export type specialitatiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * The data needed to create a specialitati.
     */
    data: XOR<specialitatiCreateInput, specialitatiUncheckedCreateInput>
  }

  /**
   * specialitati createMany
   */
  export type specialitatiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many specialitatis.
     */
    data: specialitatiCreateManyInput | specialitatiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specialitati createManyAndReturn
   */
  export type specialitatiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many specialitatis.
     */
    data: specialitatiCreateManyInput | specialitatiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specialitati update
   */
  export type specialitatiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * The data needed to update a specialitati.
     */
    data: XOR<specialitatiUpdateInput, specialitatiUncheckedUpdateInput>
    /**
     * Choose, which specialitati to update.
     */
    where: specialitatiWhereUniqueInput
  }

  /**
   * specialitati updateMany
   */
  export type specialitatiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update specialitatis.
     */
    data: XOR<specialitatiUpdateManyMutationInput, specialitatiUncheckedUpdateManyInput>
    /**
     * Filter which specialitatis to update
     */
    where?: specialitatiWhereInput
  }

  /**
   * specialitati upsert
   */
  export type specialitatiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * The filter to search for the specialitati to update in case it exists.
     */
    where: specialitatiWhereUniqueInput
    /**
     * In case the specialitati found by the `where` argument doesn't exist, create a new specialitati with this data.
     */
    create: XOR<specialitatiCreateInput, specialitatiUncheckedCreateInput>
    /**
     * In case the specialitati was found with the provided `where` argument, update it with this data.
     */
    update: XOR<specialitatiUpdateInput, specialitatiUncheckedUpdateInput>
  }

  /**
   * specialitati delete
   */
  export type specialitatiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
    /**
     * Filter which specialitati to delete.
     */
    where: specialitatiWhereUniqueInput
  }

  /**
   * specialitati deleteMany
   */
  export type specialitatiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specialitatis to delete
     */
    where?: specialitatiWhereInput
  }

  /**
   * specialitati.medic_info
   */
  export type specialitati$medic_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medic_info
     */
    select?: medic_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medic_infoInclude<ExtArgs> | null
    where?: medic_infoWhereInput
    orderBy?: medic_infoOrderByWithRelationInput | medic_infoOrderByWithRelationInput[]
    cursor?: medic_infoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medic_infoScalarFieldEnum | Medic_infoScalarFieldEnum[]
  }

  /**
   * specialitati without action
   */
  export type specialitatiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialitati
     */
    select?: specialitatiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specialitatiInclude<ExtArgs> | null
  }


  /**
   * Model program_lucru
   */

  export type AggregateProgram_lucru = {
    _count: Program_lucruCountAggregateOutputType | null
    _avg: Program_lucruAvgAggregateOutputType | null
    _sum: Program_lucruSumAggregateOutputType | null
    _min: Program_lucruMinAggregateOutputType | null
    _max: Program_lucruMaxAggregateOutputType | null
  }

  export type Program_lucruAvgAggregateOutputType = {
    zi_saptamana: number | null
  }

  export type Program_lucruSumAggregateOutputType = {
    zi_saptamana: number | null
  }

  export type Program_lucruMinAggregateOutputType = {
    id: string | null
    medic_id: string | null
    zi_saptamana: number | null
    ora_inceput: string | null
    ora_sfarsit: string | null
    este_activ: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Program_lucruMaxAggregateOutputType = {
    id: string | null
    medic_id: string | null
    zi_saptamana: number | null
    ora_inceput: string | null
    ora_sfarsit: string | null
    este_activ: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Program_lucruCountAggregateOutputType = {
    id: number
    medic_id: number
    zi_saptamana: number
    ora_inceput: number
    ora_sfarsit: number
    este_activ: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Program_lucruAvgAggregateInputType = {
    zi_saptamana?: true
  }

  export type Program_lucruSumAggregateInputType = {
    zi_saptamana?: true
  }

  export type Program_lucruMinAggregateInputType = {
    id?: true
    medic_id?: true
    zi_saptamana?: true
    ora_inceput?: true
    ora_sfarsit?: true
    este_activ?: true
    created_at?: true
    updated_at?: true
  }

  export type Program_lucruMaxAggregateInputType = {
    id?: true
    medic_id?: true
    zi_saptamana?: true
    ora_inceput?: true
    ora_sfarsit?: true
    este_activ?: true
    created_at?: true
    updated_at?: true
  }

  export type Program_lucruCountAggregateInputType = {
    id?: true
    medic_id?: true
    zi_saptamana?: true
    ora_inceput?: true
    ora_sfarsit?: true
    este_activ?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Program_lucruAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which program_lucru to aggregate.
     */
    where?: program_lucruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_lucrus to fetch.
     */
    orderBy?: program_lucruOrderByWithRelationInput | program_lucruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: program_lucruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_lucrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_lucrus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned program_lucrus
    **/
    _count?: true | Program_lucruCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Program_lucruAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Program_lucruSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Program_lucruMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Program_lucruMaxAggregateInputType
  }

  export type GetProgram_lucruAggregateType<T extends Program_lucruAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram_lucru]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram_lucru[P]>
      : GetScalarType<T[P], AggregateProgram_lucru[P]>
  }




  export type program_lucruGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: program_lucruWhereInput
    orderBy?: program_lucruOrderByWithAggregationInput | program_lucruOrderByWithAggregationInput[]
    by: Program_lucruScalarFieldEnum[] | Program_lucruScalarFieldEnum
    having?: program_lucruScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Program_lucruCountAggregateInputType | true
    _avg?: Program_lucruAvgAggregateInputType
    _sum?: Program_lucruSumAggregateInputType
    _min?: Program_lucruMinAggregateInputType
    _max?: Program_lucruMaxAggregateInputType
  }

  export type Program_lucruGroupByOutputType = {
    id: string
    medic_id: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: Program_lucruCountAggregateOutputType | null
    _avg: Program_lucruAvgAggregateOutputType | null
    _sum: Program_lucruSumAggregateOutputType | null
    _min: Program_lucruMinAggregateOutputType | null
    _max: Program_lucruMaxAggregateOutputType | null
  }

  type GetProgram_lucruGroupByPayload<T extends program_lucruGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Program_lucruGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Program_lucruGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Program_lucruGroupByOutputType[P]>
            : GetScalarType<T[P], Program_lucruGroupByOutputType[P]>
        }
      >
    >


  export type program_lucruSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medic_id?: boolean
    zi_saptamana?: boolean
    ora_inceput?: boolean
    ora_sfarsit?: boolean
    este_activ?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic_info?: boolean | medic_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program_lucru"]>

  export type program_lucruSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medic_id?: boolean
    zi_saptamana?: boolean
    ora_inceput?: boolean
    ora_sfarsit?: boolean
    este_activ?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic_info?: boolean | medic_infoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program_lucru"]>

  export type program_lucruSelectScalar = {
    id?: boolean
    medic_id?: boolean
    zi_saptamana?: boolean
    ora_inceput?: boolean
    ora_sfarsit?: boolean
    este_activ?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type program_lucruInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic_info?: boolean | medic_infoDefaultArgs<ExtArgs>
  }
  export type program_lucruIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    medic_info?: boolean | medic_infoDefaultArgs<ExtArgs>
  }

  export type $program_lucruPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "program_lucru"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      medic_info: Prisma.$medic_infoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medic_id: string
      zi_saptamana: number
      ora_inceput: string
      ora_sfarsit: string
      este_activ: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["program_lucru"]>
    composites: {}
  }

  type program_lucruGetPayload<S extends boolean | null | undefined | program_lucruDefaultArgs> = $Result.GetResult<Prisma.$program_lucruPayload, S>

  type program_lucruCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<program_lucruFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Program_lucruCountAggregateInputType | true
    }

  export interface program_lucruDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['program_lucru'], meta: { name: 'program_lucru' } }
    /**
     * Find zero or one Program_lucru that matches the filter.
     * @param {program_lucruFindUniqueArgs} args - Arguments to find a Program_lucru
     * @example
     * // Get one Program_lucru
     * const program_lucru = await prisma.program_lucru.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends program_lucruFindUniqueArgs>(args: SelectSubset<T, program_lucruFindUniqueArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Program_lucru that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {program_lucruFindUniqueOrThrowArgs} args - Arguments to find a Program_lucru
     * @example
     * // Get one Program_lucru
     * const program_lucru = await prisma.program_lucru.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends program_lucruFindUniqueOrThrowArgs>(args: SelectSubset<T, program_lucruFindUniqueOrThrowArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Program_lucru that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_lucruFindFirstArgs} args - Arguments to find a Program_lucru
     * @example
     * // Get one Program_lucru
     * const program_lucru = await prisma.program_lucru.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends program_lucruFindFirstArgs>(args?: SelectSubset<T, program_lucruFindFirstArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Program_lucru that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_lucruFindFirstOrThrowArgs} args - Arguments to find a Program_lucru
     * @example
     * // Get one Program_lucru
     * const program_lucru = await prisma.program_lucru.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends program_lucruFindFirstOrThrowArgs>(args?: SelectSubset<T, program_lucruFindFirstOrThrowArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Program_lucrus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_lucruFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Program_lucrus
     * const program_lucrus = await prisma.program_lucru.findMany()
     * 
     * // Get first 10 Program_lucrus
     * const program_lucrus = await prisma.program_lucru.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const program_lucruWithIdOnly = await prisma.program_lucru.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends program_lucruFindManyArgs>(args?: SelectSubset<T, program_lucruFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Program_lucru.
     * @param {program_lucruCreateArgs} args - Arguments to create a Program_lucru.
     * @example
     * // Create one Program_lucru
     * const Program_lucru = await prisma.program_lucru.create({
     *   data: {
     *     // ... data to create a Program_lucru
     *   }
     * })
     * 
     */
    create<T extends program_lucruCreateArgs>(args: SelectSubset<T, program_lucruCreateArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Program_lucrus.
     * @param {program_lucruCreateManyArgs} args - Arguments to create many Program_lucrus.
     * @example
     * // Create many Program_lucrus
     * const program_lucru = await prisma.program_lucru.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends program_lucruCreateManyArgs>(args?: SelectSubset<T, program_lucruCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Program_lucrus and returns the data saved in the database.
     * @param {program_lucruCreateManyAndReturnArgs} args - Arguments to create many Program_lucrus.
     * @example
     * // Create many Program_lucrus
     * const program_lucru = await prisma.program_lucru.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Program_lucrus and only return the `id`
     * const program_lucruWithIdOnly = await prisma.program_lucru.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends program_lucruCreateManyAndReturnArgs>(args?: SelectSubset<T, program_lucruCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Program_lucru.
     * @param {program_lucruDeleteArgs} args - Arguments to delete one Program_lucru.
     * @example
     * // Delete one Program_lucru
     * const Program_lucru = await prisma.program_lucru.delete({
     *   where: {
     *     // ... filter to delete one Program_lucru
     *   }
     * })
     * 
     */
    delete<T extends program_lucruDeleteArgs>(args: SelectSubset<T, program_lucruDeleteArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Program_lucru.
     * @param {program_lucruUpdateArgs} args - Arguments to update one Program_lucru.
     * @example
     * // Update one Program_lucru
     * const program_lucru = await prisma.program_lucru.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends program_lucruUpdateArgs>(args: SelectSubset<T, program_lucruUpdateArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Program_lucrus.
     * @param {program_lucruDeleteManyArgs} args - Arguments to filter Program_lucrus to delete.
     * @example
     * // Delete a few Program_lucrus
     * const { count } = await prisma.program_lucru.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends program_lucruDeleteManyArgs>(args?: SelectSubset<T, program_lucruDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Program_lucrus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_lucruUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Program_lucrus
     * const program_lucru = await prisma.program_lucru.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends program_lucruUpdateManyArgs>(args: SelectSubset<T, program_lucruUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program_lucru.
     * @param {program_lucruUpsertArgs} args - Arguments to update or create a Program_lucru.
     * @example
     * // Update or create a Program_lucru
     * const program_lucru = await prisma.program_lucru.upsert({
     *   create: {
     *     // ... data to create a Program_lucru
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program_lucru we want to update
     *   }
     * })
     */
    upsert<T extends program_lucruUpsertArgs>(args: SelectSubset<T, program_lucruUpsertArgs<ExtArgs>>): Prisma__program_lucruClient<$Result.GetResult<Prisma.$program_lucruPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Program_lucrus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_lucruCountArgs} args - Arguments to filter Program_lucrus to count.
     * @example
     * // Count the number of Program_lucrus
     * const count = await prisma.program_lucru.count({
     *   where: {
     *     // ... the filter for the Program_lucrus we want to count
     *   }
     * })
    **/
    count<T extends program_lucruCountArgs>(
      args?: Subset<T, program_lucruCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Program_lucruCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program_lucru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Program_lucruAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Program_lucruAggregateArgs>(args: Subset<T, Program_lucruAggregateArgs>): Prisma.PrismaPromise<GetProgram_lucruAggregateType<T>>

    /**
     * Group by Program_lucru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_lucruGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends program_lucruGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: program_lucruGroupByArgs['orderBy'] }
        : { orderBy?: program_lucruGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, program_lucruGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgram_lucruGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the program_lucru model
   */
  readonly fields: program_lucruFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for program_lucru.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__program_lucruClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    medic_info<T extends medic_infoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, medic_infoDefaultArgs<ExtArgs>>): Prisma__medic_infoClient<$Result.GetResult<Prisma.$medic_infoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the program_lucru model
   */ 
  interface program_lucruFieldRefs {
    readonly id: FieldRef<"program_lucru", 'String'>
    readonly medic_id: FieldRef<"program_lucru", 'String'>
    readonly zi_saptamana: FieldRef<"program_lucru", 'Int'>
    readonly ora_inceput: FieldRef<"program_lucru", 'String'>
    readonly ora_sfarsit: FieldRef<"program_lucru", 'String'>
    readonly este_activ: FieldRef<"program_lucru", 'Boolean'>
    readonly created_at: FieldRef<"program_lucru", 'DateTime'>
    readonly updated_at: FieldRef<"program_lucru", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * program_lucru findUnique
   */
  export type program_lucruFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * Filter, which program_lucru to fetch.
     */
    where: program_lucruWhereUniqueInput
  }

  /**
   * program_lucru findUniqueOrThrow
   */
  export type program_lucruFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * Filter, which program_lucru to fetch.
     */
    where: program_lucruWhereUniqueInput
  }

  /**
   * program_lucru findFirst
   */
  export type program_lucruFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * Filter, which program_lucru to fetch.
     */
    where?: program_lucruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_lucrus to fetch.
     */
    orderBy?: program_lucruOrderByWithRelationInput | program_lucruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for program_lucrus.
     */
    cursor?: program_lucruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_lucrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_lucrus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of program_lucrus.
     */
    distinct?: Program_lucruScalarFieldEnum | Program_lucruScalarFieldEnum[]
  }

  /**
   * program_lucru findFirstOrThrow
   */
  export type program_lucruFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * Filter, which program_lucru to fetch.
     */
    where?: program_lucruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_lucrus to fetch.
     */
    orderBy?: program_lucruOrderByWithRelationInput | program_lucruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for program_lucrus.
     */
    cursor?: program_lucruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_lucrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_lucrus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of program_lucrus.
     */
    distinct?: Program_lucruScalarFieldEnum | Program_lucruScalarFieldEnum[]
  }

  /**
   * program_lucru findMany
   */
  export type program_lucruFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * Filter, which program_lucrus to fetch.
     */
    where?: program_lucruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_lucrus to fetch.
     */
    orderBy?: program_lucruOrderByWithRelationInput | program_lucruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing program_lucrus.
     */
    cursor?: program_lucruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_lucrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_lucrus.
     */
    skip?: number
    distinct?: Program_lucruScalarFieldEnum | Program_lucruScalarFieldEnum[]
  }

  /**
   * program_lucru create
   */
  export type program_lucruCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * The data needed to create a program_lucru.
     */
    data: XOR<program_lucruCreateInput, program_lucruUncheckedCreateInput>
  }

  /**
   * program_lucru createMany
   */
  export type program_lucruCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many program_lucrus.
     */
    data: program_lucruCreateManyInput | program_lucruCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * program_lucru createManyAndReturn
   */
  export type program_lucruCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many program_lucrus.
     */
    data: program_lucruCreateManyInput | program_lucruCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * program_lucru update
   */
  export type program_lucruUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * The data needed to update a program_lucru.
     */
    data: XOR<program_lucruUpdateInput, program_lucruUncheckedUpdateInput>
    /**
     * Choose, which program_lucru to update.
     */
    where: program_lucruWhereUniqueInput
  }

  /**
   * program_lucru updateMany
   */
  export type program_lucruUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update program_lucrus.
     */
    data: XOR<program_lucruUpdateManyMutationInput, program_lucruUncheckedUpdateManyInput>
    /**
     * Filter which program_lucrus to update
     */
    where?: program_lucruWhereInput
  }

  /**
   * program_lucru upsert
   */
  export type program_lucruUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * The filter to search for the program_lucru to update in case it exists.
     */
    where: program_lucruWhereUniqueInput
    /**
     * In case the program_lucru found by the `where` argument doesn't exist, create a new program_lucru with this data.
     */
    create: XOR<program_lucruCreateInput, program_lucruUncheckedCreateInput>
    /**
     * In case the program_lucru was found with the provided `where` argument, update it with this data.
     */
    update: XOR<program_lucruUpdateInput, program_lucruUncheckedUpdateInput>
  }

  /**
   * program_lucru delete
   */
  export type program_lucruDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
    /**
     * Filter which program_lucru to delete.
     */
    where: program_lucruWhereUniqueInput
  }

  /**
   * program_lucru deleteMany
   */
  export type program_lucruDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which program_lucrus to delete
     */
    where?: program_lucruWhereInput
  }

  /**
   * program_lucru without action
   */
  export type program_lucruDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_lucru
     */
    select?: program_lucruSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_lucruInclude<ExtArgs> | null
  }


  /**
   * Model user_logs
   */

  export type AggregateUser_logs = {
    _count: User_logsCountAggregateOutputType | null
    _min: User_logsMinAggregateOutputType | null
    _max: User_logsMaxAggregateOutputType | null
  }

  export type User_logsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    resource: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type User_logsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    resource: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type User_logsCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    resource: number
    ip_address: number
    user_agent: number
    details: number
    created_at: number
    _all: number
  }


  export type User_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    resource?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type User_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    resource?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type User_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    resource?: true
    ip_address?: true
    user_agent?: true
    details?: true
    created_at?: true
    _all?: true
  }

  export type User_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_logs to aggregate.
     */
    where?: user_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_logs to fetch.
     */
    orderBy?: user_logsOrderByWithRelationInput | user_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_logs
    **/
    _count?: true | User_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_logsMaxAggregateInputType
  }

  export type GetUser_logsAggregateType<T extends User_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_logs[P]>
      : GetScalarType<T[P], AggregateUser_logs[P]>
  }




  export type user_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_logsWhereInput
    orderBy?: user_logsOrderByWithAggregationInput | user_logsOrderByWithAggregationInput[]
    by: User_logsScalarFieldEnum[] | User_logsScalarFieldEnum
    having?: user_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_logsCountAggregateInputType | true
    _min?: User_logsMinAggregateInputType
    _max?: User_logsMaxAggregateInputType
  }

  export type User_logsGroupByOutputType = {
    id: string
    user_id: string | null
    action: string
    resource: string | null
    ip_address: string | null
    user_agent: string | null
    details: JsonValue | null
    created_at: Date
    _count: User_logsCountAggregateOutputType | null
    _min: User_logsMinAggregateOutputType | null
    _max: User_logsMaxAggregateOutputType | null
  }

  type GetUser_logsGroupByPayload<T extends user_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_logsGroupByOutputType[P]>
            : GetScalarType<T[P], User_logsGroupByOutputType[P]>
        }
      >
    >


  export type user_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    resource?: boolean
    ip_address?: boolean
    user_agent?: boolean
    details?: boolean
    created_at?: boolean
    users?: boolean | user_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_logs"]>

  export type user_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    resource?: boolean
    ip_address?: boolean
    user_agent?: boolean
    details?: boolean
    created_at?: boolean
    users?: boolean | user_logs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_logs"]>

  export type user_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    resource?: boolean
    ip_address?: boolean
    user_agent?: boolean
    details?: boolean
    created_at?: boolean
  }

  export type user_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_logs$usersArgs<ExtArgs>
  }
  export type user_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_logs$usersArgs<ExtArgs>
  }

  export type $user_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      action: string
      resource: string | null
      ip_address: string | null
      user_agent: string | null
      details: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["user_logs"]>
    composites: {}
  }

  type user_logsGetPayload<S extends boolean | null | undefined | user_logsDefaultArgs> = $Result.GetResult<Prisma.$user_logsPayload, S>

  type user_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_logsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_logsCountAggregateInputType | true
    }

  export interface user_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_logs'], meta: { name: 'user_logs' } }
    /**
     * Find zero or one User_logs that matches the filter.
     * @param {user_logsFindUniqueArgs} args - Arguments to find a User_logs
     * @example
     * // Get one User_logs
     * const user_logs = await prisma.user_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_logsFindUniqueArgs>(args: SelectSubset<T, user_logsFindUniqueArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_logs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_logsFindUniqueOrThrowArgs} args - Arguments to find a User_logs
     * @example
     * // Get one User_logs
     * const user_logs = await prisma.user_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_logsFindFirstArgs} args - Arguments to find a User_logs
     * @example
     * // Get one User_logs
     * const user_logs = await prisma.user_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_logsFindFirstArgs>(args?: SelectSubset<T, user_logsFindFirstArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_logsFindFirstOrThrowArgs} args - Arguments to find a User_logs
     * @example
     * // Get one User_logs
     * const user_logs = await prisma.user_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_logs
     * const user_logs = await prisma.user_logs.findMany()
     * 
     * // Get first 10 User_logs
     * const user_logs = await prisma.user_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_logsWithIdOnly = await prisma.user_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_logsFindManyArgs>(args?: SelectSubset<T, user_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_logs.
     * @param {user_logsCreateArgs} args - Arguments to create a User_logs.
     * @example
     * // Create one User_logs
     * const User_logs = await prisma.user_logs.create({
     *   data: {
     *     // ... data to create a User_logs
     *   }
     * })
     * 
     */
    create<T extends user_logsCreateArgs>(args: SelectSubset<T, user_logsCreateArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_logs.
     * @param {user_logsCreateManyArgs} args - Arguments to create many User_logs.
     * @example
     * // Create many User_logs
     * const user_logs = await prisma.user_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_logsCreateManyArgs>(args?: SelectSubset<T, user_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_logs and returns the data saved in the database.
     * @param {user_logsCreateManyAndReturnArgs} args - Arguments to create many User_logs.
     * @example
     * // Create many User_logs
     * const user_logs = await prisma.user_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_logs and only return the `id`
     * const user_logsWithIdOnly = await prisma.user_logs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User_logs.
     * @param {user_logsDeleteArgs} args - Arguments to delete one User_logs.
     * @example
     * // Delete one User_logs
     * const User_logs = await prisma.user_logs.delete({
     *   where: {
     *     // ... filter to delete one User_logs
     *   }
     * })
     * 
     */
    delete<T extends user_logsDeleteArgs>(args: SelectSubset<T, user_logsDeleteArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_logs.
     * @param {user_logsUpdateArgs} args - Arguments to update one User_logs.
     * @example
     * // Update one User_logs
     * const user_logs = await prisma.user_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_logsUpdateArgs>(args: SelectSubset<T, user_logsUpdateArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_logs.
     * @param {user_logsDeleteManyArgs} args - Arguments to filter User_logs to delete.
     * @example
     * // Delete a few User_logs
     * const { count } = await prisma.user_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_logsDeleteManyArgs>(args?: SelectSubset<T, user_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_logs
     * const user_logs = await prisma.user_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_logsUpdateManyArgs>(args: SelectSubset<T, user_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_logs.
     * @param {user_logsUpsertArgs} args - Arguments to update or create a User_logs.
     * @example
     * // Update or create a User_logs
     * const user_logs = await prisma.user_logs.upsert({
     *   create: {
     *     // ... data to create a User_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_logs we want to update
     *   }
     * })
     */
    upsert<T extends user_logsUpsertArgs>(args: SelectSubset<T, user_logsUpsertArgs<ExtArgs>>): Prisma__user_logsClient<$Result.GetResult<Prisma.$user_logsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_logsCountArgs} args - Arguments to filter User_logs to count.
     * @example
     * // Count the number of User_logs
     * const count = await prisma.user_logs.count({
     *   where: {
     *     // ... the filter for the User_logs we want to count
     *   }
     * })
    **/
    count<T extends user_logsCountArgs>(
      args?: Subset<T, user_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_logsAggregateArgs>(args: Subset<T, User_logsAggregateArgs>): Prisma.PrismaPromise<GetUser_logsAggregateType<T>>

    /**
     * Group by User_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_logsGroupByArgs['orderBy'] }
        : { orderBy?: user_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_logs model
   */
  readonly fields: user_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends user_logs$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_logs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_logs model
   */ 
  interface user_logsFieldRefs {
    readonly id: FieldRef<"user_logs", 'String'>
    readonly user_id: FieldRef<"user_logs", 'String'>
    readonly action: FieldRef<"user_logs", 'String'>
    readonly resource: FieldRef<"user_logs", 'String'>
    readonly ip_address: FieldRef<"user_logs", 'String'>
    readonly user_agent: FieldRef<"user_logs", 'String'>
    readonly details: FieldRef<"user_logs", 'Json'>
    readonly created_at: FieldRef<"user_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_logs findUnique
   */
  export type user_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_logs to fetch.
     */
    where: user_logsWhereUniqueInput
  }

  /**
   * user_logs findUniqueOrThrow
   */
  export type user_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_logs to fetch.
     */
    where: user_logsWhereUniqueInput
  }

  /**
   * user_logs findFirst
   */
  export type user_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_logs to fetch.
     */
    where?: user_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_logs to fetch.
     */
    orderBy?: user_logsOrderByWithRelationInput | user_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_logs.
     */
    cursor?: user_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_logs.
     */
    distinct?: User_logsScalarFieldEnum | User_logsScalarFieldEnum[]
  }

  /**
   * user_logs findFirstOrThrow
   */
  export type user_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_logs to fetch.
     */
    where?: user_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_logs to fetch.
     */
    orderBy?: user_logsOrderByWithRelationInput | user_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_logs.
     */
    cursor?: user_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_logs.
     */
    distinct?: User_logsScalarFieldEnum | User_logsScalarFieldEnum[]
  }

  /**
   * user_logs findMany
   */
  export type user_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * Filter, which user_logs to fetch.
     */
    where?: user_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_logs to fetch.
     */
    orderBy?: user_logsOrderByWithRelationInput | user_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_logs.
     */
    cursor?: user_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_logs.
     */
    skip?: number
    distinct?: User_logsScalarFieldEnum | User_logsScalarFieldEnum[]
  }

  /**
   * user_logs create
   */
  export type user_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_logs.
     */
    data: XOR<user_logsCreateInput, user_logsUncheckedCreateInput>
  }

  /**
   * user_logs createMany
   */
  export type user_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_logs.
     */
    data: user_logsCreateManyInput | user_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_logs createManyAndReturn
   */
  export type user_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many user_logs.
     */
    data: user_logsCreateManyInput | user_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_logs update
   */
  export type user_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_logs.
     */
    data: XOR<user_logsUpdateInput, user_logsUncheckedUpdateInput>
    /**
     * Choose, which user_logs to update.
     */
    where: user_logsWhereUniqueInput
  }

  /**
   * user_logs updateMany
   */
  export type user_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_logs.
     */
    data: XOR<user_logsUpdateManyMutationInput, user_logsUncheckedUpdateManyInput>
    /**
     * Filter which user_logs to update
     */
    where?: user_logsWhereInput
  }

  /**
   * user_logs upsert
   */
  export type user_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_logs to update in case it exists.
     */
    where: user_logsWhereUniqueInput
    /**
     * In case the user_logs found by the `where` argument doesn't exist, create a new user_logs with this data.
     */
    create: XOR<user_logsCreateInput, user_logsUncheckedCreateInput>
    /**
     * In case the user_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_logsUpdateInput, user_logsUncheckedUpdateInput>
  }

  /**
   * user_logs delete
   */
  export type user_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
    /**
     * Filter which user_logs to delete.
     */
    where: user_logsWhereUniqueInput
  }

  /**
   * user_logs deleteMany
   */
  export type user_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_logs to delete
     */
    where?: user_logsWhereInput
  }

  /**
   * user_logs.users
   */
  export type user_logs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_logs without action
   */
  export type user_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_logs
     */
    select?: user_logsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_logsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Auth_keysScalarFieldEnum: {
    kid: 'kid',
    public_key: 'public_key',
    private_key: 'private_key',
    algorithm: 'algorithm',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type Auth_keysScalarFieldEnum = (typeof Auth_keysScalarFieldEnum)[keyof typeof Auth_keysScalarFieldEnum]


  export const Oauth_clientsScalarFieldEnum: {
    client_id: 'client_id',
    client_secret_hash: 'client_secret_hash',
    redirect_uris: 'redirect_uris',
    name: 'name'
  };

  export type Oauth_clientsScalarFieldEnum = (typeof Oauth_clientsScalarFieldEnum)[keyof typeof Oauth_clientsScalarFieldEnum]


  export const Oauth_usersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Oauth_usersScalarFieldEnum = (typeof Oauth_usersScalarFieldEnum)[keyof typeof Oauth_usersScalarFieldEnum]


  export const Refresh_tokensScalarFieldEnum: {
    token_id: 'token_id',
    user_id: 'user_id',
    client_id: 'client_id',
    scope: 'scope',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    session_token: 'session_token',
    user_id: 'user_id',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password_hash: 'password_hash',
    password_salt: 'password_salt',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProgramariScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    medic_id: 'medic_id',
    serviciu: 'serviciu',
    data_programare: 'data_programare',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProgramariScalarFieldEnum = (typeof ProgramariScalarFieldEnum)[keyof typeof ProgramariScalarFieldEnum]


  export const Medic_infoScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    specialitate_id: 'specialitate_id',
    titlu: 'titlu',
    experienta_ani: 'experienta_ani',
    telefon: 'telefon',
    cabinet: 'cabinet',
    pret_consultatie: 'pret_consultatie',
    bio: 'bio',
    rating: 'rating',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Medic_infoScalarFieldEnum = (typeof Medic_infoScalarFieldEnum)[keyof typeof Medic_infoScalarFieldEnum]


  export const SpecialitatiScalarFieldEnum: {
    id: 'id',
    nume: 'nume',
    descriere: 'descriere',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SpecialitatiScalarFieldEnum = (typeof SpecialitatiScalarFieldEnum)[keyof typeof SpecialitatiScalarFieldEnum]


  export const Program_lucruScalarFieldEnum: {
    id: 'id',
    medic_id: 'medic_id',
    zi_saptamana: 'zi_saptamana',
    ora_inceput: 'ora_inceput',
    ora_sfarsit: 'ora_sfarsit',
    este_activ: 'este_activ',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Program_lucruScalarFieldEnum = (typeof Program_lucruScalarFieldEnum)[keyof typeof Program_lucruScalarFieldEnum]


  export const User_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    resource: 'resource',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    details: 'details',
    created_at: 'created_at'
  };

  export type User_logsScalarFieldEnum = (typeof User_logsScalarFieldEnum)[keyof typeof User_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type auth_keysWhereInput = {
    AND?: auth_keysWhereInput | auth_keysWhereInput[]
    OR?: auth_keysWhereInput[]
    NOT?: auth_keysWhereInput | auth_keysWhereInput[]
    kid?: UuidFilter<"auth_keys"> | string
    public_key?: StringFilter<"auth_keys"> | string
    private_key?: StringFilter<"auth_keys"> | string
    algorithm?: StringNullableFilter<"auth_keys"> | string | null
    is_active?: BoolNullableFilter<"auth_keys"> | boolean | null
    created_at?: DateTimeNullableFilter<"auth_keys"> | Date | string | null
  }

  export type auth_keysOrderByWithRelationInput = {
    kid?: SortOrder
    public_key?: SortOrder
    private_key?: SortOrder
    algorithm?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type auth_keysWhereUniqueInput = Prisma.AtLeast<{
    kid?: string
    AND?: auth_keysWhereInput | auth_keysWhereInput[]
    OR?: auth_keysWhereInput[]
    NOT?: auth_keysWhereInput | auth_keysWhereInput[]
    public_key?: StringFilter<"auth_keys"> | string
    private_key?: StringFilter<"auth_keys"> | string
    algorithm?: StringNullableFilter<"auth_keys"> | string | null
    is_active?: BoolNullableFilter<"auth_keys"> | boolean | null
    created_at?: DateTimeNullableFilter<"auth_keys"> | Date | string | null
  }, "kid">

  export type auth_keysOrderByWithAggregationInput = {
    kid?: SortOrder
    public_key?: SortOrder
    private_key?: SortOrder
    algorithm?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: auth_keysCountOrderByAggregateInput
    _max?: auth_keysMaxOrderByAggregateInput
    _min?: auth_keysMinOrderByAggregateInput
  }

  export type auth_keysScalarWhereWithAggregatesInput = {
    AND?: auth_keysScalarWhereWithAggregatesInput | auth_keysScalarWhereWithAggregatesInput[]
    OR?: auth_keysScalarWhereWithAggregatesInput[]
    NOT?: auth_keysScalarWhereWithAggregatesInput | auth_keysScalarWhereWithAggregatesInput[]
    kid?: UuidWithAggregatesFilter<"auth_keys"> | string
    public_key?: StringWithAggregatesFilter<"auth_keys"> | string
    private_key?: StringWithAggregatesFilter<"auth_keys"> | string
    algorithm?: StringNullableWithAggregatesFilter<"auth_keys"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"auth_keys"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"auth_keys"> | Date | string | null
  }

  export type oauth_clientsWhereInput = {
    AND?: oauth_clientsWhereInput | oauth_clientsWhereInput[]
    OR?: oauth_clientsWhereInput[]
    NOT?: oauth_clientsWhereInput | oauth_clientsWhereInput[]
    client_id?: StringFilter<"oauth_clients"> | string
    client_secret_hash?: StringNullableFilter<"oauth_clients"> | string | null
    redirect_uris?: StringNullableListFilter<"oauth_clients">
    name?: StringNullableFilter<"oauth_clients"> | string | null
  }

  export type oauth_clientsOrderByWithRelationInput = {
    client_id?: SortOrder
    client_secret_hash?: SortOrderInput | SortOrder
    redirect_uris?: SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type oauth_clientsWhereUniqueInput = Prisma.AtLeast<{
    client_id?: string
    AND?: oauth_clientsWhereInput | oauth_clientsWhereInput[]
    OR?: oauth_clientsWhereInput[]
    NOT?: oauth_clientsWhereInput | oauth_clientsWhereInput[]
    client_secret_hash?: StringNullableFilter<"oauth_clients"> | string | null
    redirect_uris?: StringNullableListFilter<"oauth_clients">
    name?: StringNullableFilter<"oauth_clients"> | string | null
  }, "client_id">

  export type oauth_clientsOrderByWithAggregationInput = {
    client_id?: SortOrder
    client_secret_hash?: SortOrderInput | SortOrder
    redirect_uris?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: oauth_clientsCountOrderByAggregateInput
    _max?: oauth_clientsMaxOrderByAggregateInput
    _min?: oauth_clientsMinOrderByAggregateInput
  }

  export type oauth_clientsScalarWhereWithAggregatesInput = {
    AND?: oauth_clientsScalarWhereWithAggregatesInput | oauth_clientsScalarWhereWithAggregatesInput[]
    OR?: oauth_clientsScalarWhereWithAggregatesInput[]
    NOT?: oauth_clientsScalarWhereWithAggregatesInput | oauth_clientsScalarWhereWithAggregatesInput[]
    client_id?: StringWithAggregatesFilter<"oauth_clients"> | string
    client_secret_hash?: StringNullableWithAggregatesFilter<"oauth_clients"> | string | null
    redirect_uris?: StringNullableListFilter<"oauth_clients">
    name?: StringNullableWithAggregatesFilter<"oauth_clients"> | string | null
  }

  export type oauth_usersWhereInput = {
    AND?: oauth_usersWhereInput | oauth_usersWhereInput[]
    OR?: oauth_usersWhereInput[]
    NOT?: oauth_usersWhereInput | oauth_usersWhereInput[]
    id?: UuidFilter<"oauth_users"> | string
    email?: StringFilter<"oauth_users"> | string
    username?: StringFilter<"oauth_users"> | string
    password_hash?: StringFilter<"oauth_users"> | string
    role?: StringFilter<"oauth_users"> | string
    created_at?: DateTimeFilter<"oauth_users"> | Date | string
    updated_at?: DateTimeFilter<"oauth_users"> | Date | string
  }

  export type oauth_usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type oauth_usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: oauth_usersWhereInput | oauth_usersWhereInput[]
    OR?: oauth_usersWhereInput[]
    NOT?: oauth_usersWhereInput | oauth_usersWhereInput[]
    username?: StringFilter<"oauth_users"> | string
    password_hash?: StringFilter<"oauth_users"> | string
    role?: StringFilter<"oauth_users"> | string
    created_at?: DateTimeFilter<"oauth_users"> | Date | string
    updated_at?: DateTimeFilter<"oauth_users"> | Date | string
  }, "id" | "email">

  export type oauth_usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: oauth_usersCountOrderByAggregateInput
    _max?: oauth_usersMaxOrderByAggregateInput
    _min?: oauth_usersMinOrderByAggregateInput
  }

  export type oauth_usersScalarWhereWithAggregatesInput = {
    AND?: oauth_usersScalarWhereWithAggregatesInput | oauth_usersScalarWhereWithAggregatesInput[]
    OR?: oauth_usersScalarWhereWithAggregatesInput[]
    NOT?: oauth_usersScalarWhereWithAggregatesInput | oauth_usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"oauth_users"> | string
    email?: StringWithAggregatesFilter<"oauth_users"> | string
    username?: StringWithAggregatesFilter<"oauth_users"> | string
    password_hash?: StringWithAggregatesFilter<"oauth_users"> | string
    role?: StringWithAggregatesFilter<"oauth_users"> | string
    created_at?: DateTimeWithAggregatesFilter<"oauth_users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"oauth_users"> | Date | string
  }

  export type refresh_tokensWhereInput = {
    AND?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    OR?: refresh_tokensWhereInput[]
    NOT?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    token_id?: StringFilter<"refresh_tokens"> | string
    user_id?: UuidNullableFilter<"refresh_tokens"> | string | null
    client_id?: StringFilter<"refresh_tokens"> | string
    scope?: StringNullableFilter<"refresh_tokens"> | string | null
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type refresh_tokensOrderByWithRelationInput = {
    token_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    client_id?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type refresh_tokensWhereUniqueInput = Prisma.AtLeast<{
    token_id?: string
    AND?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    OR?: refresh_tokensWhereInput[]
    NOT?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    user_id?: UuidNullableFilter<"refresh_tokens"> | string | null
    client_id?: StringFilter<"refresh_tokens"> | string
    scope?: StringNullableFilter<"refresh_tokens"> | string | null
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "token_id">

  export type refresh_tokensOrderByWithAggregationInput = {
    token_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    client_id?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: refresh_tokensCountOrderByAggregateInput
    _max?: refresh_tokensMaxOrderByAggregateInput
    _min?: refresh_tokensMinOrderByAggregateInput
  }

  export type refresh_tokensScalarWhereWithAggregatesInput = {
    AND?: refresh_tokensScalarWhereWithAggregatesInput | refresh_tokensScalarWhereWithAggregatesInput[]
    OR?: refresh_tokensScalarWhereWithAggregatesInput[]
    NOT?: refresh_tokensScalarWhereWithAggregatesInput | refresh_tokensScalarWhereWithAggregatesInput[]
    token_id?: StringWithAggregatesFilter<"refresh_tokens"> | string
    user_id?: UuidNullableWithAggregatesFilter<"refresh_tokens"> | string | null
    client_id?: StringWithAggregatesFilter<"refresh_tokens"> | string
    scope?: StringNullableWithAggregatesFilter<"refresh_tokens"> | string | null
    expires_at?: DateTimeWithAggregatesFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"refresh_tokens"> | Date | string | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: IntFilter<"sessions"> | number
    session_token?: StringFilter<"sessions"> | string
    user_id?: UuidNullableFilter<"sessions"> | string | null
    expires_at?: DateTimeFilter<"sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    session_token?: string
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    user_id?: UuidNullableFilter<"sessions"> | string | null
    expires_at?: DateTimeFilter<"sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id" | "session_token">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sessions"> | number
    session_token?: StringWithAggregatesFilter<"sessions"> | string
    user_id?: UuidNullableWithAggregatesFilter<"sessions"> | string | null
    expires_at?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"sessions"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    password_salt?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    programari?: ProgramariListRelationFilter
    refresh_tokens?: Refresh_tokensListRelationFilter
    sessions?: SessionsListRelationFilter
    user_logs?: User_logsListRelationFilter
    medic_info?: XOR<Medic_infoNullableRelationFilter, medic_infoWhereInput> | null
    programari_medic?: ProgramariListRelationFilter
    program_lucru?: Program_lucruListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    programari?: programariOrderByRelationAggregateInput
    refresh_tokens?: refresh_tokensOrderByRelationAggregateInput
    sessions?: sessionsOrderByRelationAggregateInput
    user_logs?: user_logsOrderByRelationAggregateInput
    medic_info?: medic_infoOrderByWithRelationInput
    programari_medic?: programariOrderByRelationAggregateInput
    program_lucru?: program_lucruOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    password_salt?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    programari?: ProgramariListRelationFilter
    refresh_tokens?: Refresh_tokensListRelationFilter
    sessions?: SessionsListRelationFilter
    user_logs?: User_logsListRelationFilter
    medic_info?: XOR<Medic_infoNullableRelationFilter, medic_infoWhereInput> | null
    programari_medic?: ProgramariListRelationFilter
    program_lucru?: Program_lucruListRelationFilter
  }, "id" | "email" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    password_salt?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type programariWhereInput = {
    AND?: programariWhereInput | programariWhereInput[]
    OR?: programariWhereInput[]
    NOT?: programariWhereInput | programariWhereInput[]
    id?: IntFilter<"programari"> | number
    user_id?: UuidFilter<"programari"> | string
    medic_id?: UuidFilter<"programari"> | string
    serviciu?: StringFilter<"programari"> | string
    data_programare?: DateTimeFilter<"programari"> | Date | string
    status?: StringNullableFilter<"programari"> | string | null
    created_at?: DateTimeNullableFilter<"programari"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"programari"> | Date | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    medic?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type programariOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    medic_id?: SortOrder
    serviciu?: SortOrder
    data_programare?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    medic?: usersOrderByWithRelationInput
  }

  export type programariWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: programariWhereInput | programariWhereInput[]
    OR?: programariWhereInput[]
    NOT?: programariWhereInput | programariWhereInput[]
    user_id?: UuidFilter<"programari"> | string
    medic_id?: UuidFilter<"programari"> | string
    serviciu?: StringFilter<"programari"> | string
    data_programare?: DateTimeFilter<"programari"> | Date | string
    status?: StringNullableFilter<"programari"> | string | null
    created_at?: DateTimeNullableFilter<"programari"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"programari"> | Date | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    medic?: XOR<UsersRelationFilter, usersWhereInput>
  }, "id">

  export type programariOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    medic_id?: SortOrder
    serviciu?: SortOrder
    data_programare?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: programariCountOrderByAggregateInput
    _avg?: programariAvgOrderByAggregateInput
    _max?: programariMaxOrderByAggregateInput
    _min?: programariMinOrderByAggregateInput
    _sum?: programariSumOrderByAggregateInput
  }

  export type programariScalarWhereWithAggregatesInput = {
    AND?: programariScalarWhereWithAggregatesInput | programariScalarWhereWithAggregatesInput[]
    OR?: programariScalarWhereWithAggregatesInput[]
    NOT?: programariScalarWhereWithAggregatesInput | programariScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"programari"> | number
    user_id?: UuidWithAggregatesFilter<"programari"> | string
    medic_id?: UuidWithAggregatesFilter<"programari"> | string
    serviciu?: StringWithAggregatesFilter<"programari"> | string
    data_programare?: DateTimeWithAggregatesFilter<"programari"> | Date | string
    status?: StringNullableWithAggregatesFilter<"programari"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"programari"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"programari"> | Date | string | null
  }

  export type medic_infoWhereInput = {
    AND?: medic_infoWhereInput | medic_infoWhereInput[]
    OR?: medic_infoWhereInput[]
    NOT?: medic_infoWhereInput | medic_infoWhereInput[]
    id?: UuidFilter<"medic_info"> | string
    user_id?: UuidFilter<"medic_info"> | string
    specialitate_id?: IntFilter<"medic_info"> | number
    titlu?: StringNullableFilter<"medic_info"> | string | null
    experienta_ani?: IntNullableFilter<"medic_info"> | number | null
    telefon?: StringNullableFilter<"medic_info"> | string | null
    cabinet?: StringNullableFilter<"medic_info"> | string | null
    pret_consultatie?: IntNullableFilter<"medic_info"> | number | null
    bio?: StringNullableFilter<"medic_info"> | string | null
    rating?: FloatNullableFilter<"medic_info"> | number | null
    created_at?: DateTimeNullableFilter<"medic_info"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"medic_info"> | Date | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    specialitate?: XOR<SpecialitatiRelationFilter, specialitatiWhereInput>
    program_lucru?: Program_lucruListRelationFilter
  }

  export type medic_infoOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialitate_id?: SortOrder
    titlu?: SortOrderInput | SortOrder
    experienta_ani?: SortOrderInput | SortOrder
    telefon?: SortOrderInput | SortOrder
    cabinet?: SortOrderInput | SortOrder
    pret_consultatie?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    specialitate?: specialitatiOrderByWithRelationInput
    program_lucru?: program_lucruOrderByRelationAggregateInput
  }

  export type medic_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: medic_infoWhereInput | medic_infoWhereInput[]
    OR?: medic_infoWhereInput[]
    NOT?: medic_infoWhereInput | medic_infoWhereInput[]
    specialitate_id?: IntFilter<"medic_info"> | number
    titlu?: StringNullableFilter<"medic_info"> | string | null
    experienta_ani?: IntNullableFilter<"medic_info"> | number | null
    telefon?: StringNullableFilter<"medic_info"> | string | null
    cabinet?: StringNullableFilter<"medic_info"> | string | null
    pret_consultatie?: IntNullableFilter<"medic_info"> | number | null
    bio?: StringNullableFilter<"medic_info"> | string | null
    rating?: FloatNullableFilter<"medic_info"> | number | null
    created_at?: DateTimeNullableFilter<"medic_info"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"medic_info"> | Date | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    specialitate?: XOR<SpecialitatiRelationFilter, specialitatiWhereInput>
    program_lucru?: Program_lucruListRelationFilter
  }, "id" | "user_id">

  export type medic_infoOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialitate_id?: SortOrder
    titlu?: SortOrderInput | SortOrder
    experienta_ani?: SortOrderInput | SortOrder
    telefon?: SortOrderInput | SortOrder
    cabinet?: SortOrderInput | SortOrder
    pret_consultatie?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: medic_infoCountOrderByAggregateInput
    _avg?: medic_infoAvgOrderByAggregateInput
    _max?: medic_infoMaxOrderByAggregateInput
    _min?: medic_infoMinOrderByAggregateInput
    _sum?: medic_infoSumOrderByAggregateInput
  }

  export type medic_infoScalarWhereWithAggregatesInput = {
    AND?: medic_infoScalarWhereWithAggregatesInput | medic_infoScalarWhereWithAggregatesInput[]
    OR?: medic_infoScalarWhereWithAggregatesInput[]
    NOT?: medic_infoScalarWhereWithAggregatesInput | medic_infoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"medic_info"> | string
    user_id?: UuidWithAggregatesFilter<"medic_info"> | string
    specialitate_id?: IntWithAggregatesFilter<"medic_info"> | number
    titlu?: StringNullableWithAggregatesFilter<"medic_info"> | string | null
    experienta_ani?: IntNullableWithAggregatesFilter<"medic_info"> | number | null
    telefon?: StringNullableWithAggregatesFilter<"medic_info"> | string | null
    cabinet?: StringNullableWithAggregatesFilter<"medic_info"> | string | null
    pret_consultatie?: IntNullableWithAggregatesFilter<"medic_info"> | number | null
    bio?: StringNullableWithAggregatesFilter<"medic_info"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"medic_info"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"medic_info"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"medic_info"> | Date | string | null
  }

  export type specialitatiWhereInput = {
    AND?: specialitatiWhereInput | specialitatiWhereInput[]
    OR?: specialitatiWhereInput[]
    NOT?: specialitatiWhereInput | specialitatiWhereInput[]
    id?: IntFilter<"specialitati"> | number
    nume?: StringFilter<"specialitati"> | string
    descriere?: StringNullableFilter<"specialitati"> | string | null
    created_at?: DateTimeFilter<"specialitati"> | Date | string
    updated_at?: DateTimeFilter<"specialitati"> | Date | string
    medic_info?: Medic_infoListRelationFilter
  }

  export type specialitatiOrderByWithRelationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    medic_info?: medic_infoOrderByRelationAggregateInput
  }

  export type specialitatiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nume?: string
    AND?: specialitatiWhereInput | specialitatiWhereInput[]
    OR?: specialitatiWhereInput[]
    NOT?: specialitatiWhereInput | specialitatiWhereInput[]
    descriere?: StringNullableFilter<"specialitati"> | string | null
    created_at?: DateTimeFilter<"specialitati"> | Date | string
    updated_at?: DateTimeFilter<"specialitati"> | Date | string
    medic_info?: Medic_infoListRelationFilter
  }, "id" | "nume">

  export type specialitatiOrderByWithAggregationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: specialitatiCountOrderByAggregateInput
    _avg?: specialitatiAvgOrderByAggregateInput
    _max?: specialitatiMaxOrderByAggregateInput
    _min?: specialitatiMinOrderByAggregateInput
    _sum?: specialitatiSumOrderByAggregateInput
  }

  export type specialitatiScalarWhereWithAggregatesInput = {
    AND?: specialitatiScalarWhereWithAggregatesInput | specialitatiScalarWhereWithAggregatesInput[]
    OR?: specialitatiScalarWhereWithAggregatesInput[]
    NOT?: specialitatiScalarWhereWithAggregatesInput | specialitatiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"specialitati"> | number
    nume?: StringWithAggregatesFilter<"specialitati"> | string
    descriere?: StringNullableWithAggregatesFilter<"specialitati"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"specialitati"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"specialitati"> | Date | string
  }

  export type program_lucruWhereInput = {
    AND?: program_lucruWhereInput | program_lucruWhereInput[]
    OR?: program_lucruWhereInput[]
    NOT?: program_lucruWhereInput | program_lucruWhereInput[]
    id?: UuidFilter<"program_lucru"> | string
    medic_id?: UuidFilter<"program_lucru"> | string
    zi_saptamana?: IntFilter<"program_lucru"> | number
    ora_inceput?: StringFilter<"program_lucru"> | string
    ora_sfarsit?: StringFilter<"program_lucru"> | string
    este_activ?: BoolFilter<"program_lucru"> | boolean
    created_at?: DateTimeNullableFilter<"program_lucru"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"program_lucru"> | Date | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    medic_info?: XOR<Medic_infoRelationFilter, medic_infoWhereInput>
  }

  export type program_lucruOrderByWithRelationInput = {
    id?: SortOrder
    medic_id?: SortOrder
    zi_saptamana?: SortOrder
    ora_inceput?: SortOrder
    ora_sfarsit?: SortOrder
    este_activ?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    medic_info?: medic_infoOrderByWithRelationInput
  }

  export type program_lucruWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: program_lucruWhereInput | program_lucruWhereInput[]
    OR?: program_lucruWhereInput[]
    NOT?: program_lucruWhereInput | program_lucruWhereInput[]
    medic_id?: UuidFilter<"program_lucru"> | string
    zi_saptamana?: IntFilter<"program_lucru"> | number
    ora_inceput?: StringFilter<"program_lucru"> | string
    ora_sfarsit?: StringFilter<"program_lucru"> | string
    este_activ?: BoolFilter<"program_lucru"> | boolean
    created_at?: DateTimeNullableFilter<"program_lucru"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"program_lucru"> | Date | string | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    medic_info?: XOR<Medic_infoRelationFilter, medic_infoWhereInput>
  }, "id">

  export type program_lucruOrderByWithAggregationInput = {
    id?: SortOrder
    medic_id?: SortOrder
    zi_saptamana?: SortOrder
    ora_inceput?: SortOrder
    ora_sfarsit?: SortOrder
    este_activ?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: program_lucruCountOrderByAggregateInput
    _avg?: program_lucruAvgOrderByAggregateInput
    _max?: program_lucruMaxOrderByAggregateInput
    _min?: program_lucruMinOrderByAggregateInput
    _sum?: program_lucruSumOrderByAggregateInput
  }

  export type program_lucruScalarWhereWithAggregatesInput = {
    AND?: program_lucruScalarWhereWithAggregatesInput | program_lucruScalarWhereWithAggregatesInput[]
    OR?: program_lucruScalarWhereWithAggregatesInput[]
    NOT?: program_lucruScalarWhereWithAggregatesInput | program_lucruScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"program_lucru"> | string
    medic_id?: UuidWithAggregatesFilter<"program_lucru"> | string
    zi_saptamana?: IntWithAggregatesFilter<"program_lucru"> | number
    ora_inceput?: StringWithAggregatesFilter<"program_lucru"> | string
    ora_sfarsit?: StringWithAggregatesFilter<"program_lucru"> | string
    este_activ?: BoolWithAggregatesFilter<"program_lucru"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"program_lucru"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"program_lucru"> | Date | string | null
  }

  export type user_logsWhereInput = {
    AND?: user_logsWhereInput | user_logsWhereInput[]
    OR?: user_logsWhereInput[]
    NOT?: user_logsWhereInput | user_logsWhereInput[]
    id?: UuidFilter<"user_logs"> | string
    user_id?: UuidNullableFilter<"user_logs"> | string | null
    action?: StringFilter<"user_logs"> | string
    resource?: StringNullableFilter<"user_logs"> | string | null
    ip_address?: StringNullableFilter<"user_logs"> | string | null
    user_agent?: StringNullableFilter<"user_logs"> | string | null
    details?: JsonNullableFilter<"user_logs">
    created_at?: DateTimeFilter<"user_logs"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type user_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_logsWhereInput | user_logsWhereInput[]
    OR?: user_logsWhereInput[]
    NOT?: user_logsWhereInput | user_logsWhereInput[]
    user_id?: UuidNullableFilter<"user_logs"> | string | null
    action?: StringFilter<"user_logs"> | string
    resource?: StringNullableFilter<"user_logs"> | string | null
    ip_address?: StringNullableFilter<"user_logs"> | string | null
    user_agent?: StringNullableFilter<"user_logs"> | string | null
    details?: JsonNullableFilter<"user_logs">
    created_at?: DateTimeFilter<"user_logs"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id">

  export type user_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: user_logsCountOrderByAggregateInput
    _max?: user_logsMaxOrderByAggregateInput
    _min?: user_logsMinOrderByAggregateInput
  }

  export type user_logsScalarWhereWithAggregatesInput = {
    AND?: user_logsScalarWhereWithAggregatesInput | user_logsScalarWhereWithAggregatesInput[]
    OR?: user_logsScalarWhereWithAggregatesInput[]
    NOT?: user_logsScalarWhereWithAggregatesInput | user_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_logs"> | string
    user_id?: UuidNullableWithAggregatesFilter<"user_logs"> | string | null
    action?: StringWithAggregatesFilter<"user_logs"> | string
    resource?: StringNullableWithAggregatesFilter<"user_logs"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"user_logs"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"user_logs"> | string | null
    details?: JsonNullableWithAggregatesFilter<"user_logs">
    created_at?: DateTimeWithAggregatesFilter<"user_logs"> | Date | string
  }

  export type auth_keysCreateInput = {
    kid?: string
    public_key: string
    private_key: string
    algorithm?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type auth_keysUncheckedCreateInput = {
    kid?: string
    public_key: string
    private_key: string
    algorithm?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type auth_keysUpdateInput = {
    kid?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    algorithm?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_keysUncheckedUpdateInput = {
    kid?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    algorithm?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_keysCreateManyInput = {
    kid?: string
    public_key: string
    private_key: string
    algorithm?: string | null
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type auth_keysUpdateManyMutationInput = {
    kid?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    algorithm?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auth_keysUncheckedUpdateManyInput = {
    kid?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    algorithm?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type oauth_clientsCreateInput = {
    client_id: string
    client_secret_hash?: string | null
    redirect_uris?: oauth_clientsCreateredirect_urisInput | string[]
    name?: string | null
  }

  export type oauth_clientsUncheckedCreateInput = {
    client_id: string
    client_secret_hash?: string | null
    redirect_uris?: oauth_clientsCreateredirect_urisInput | string[]
    name?: string | null
  }

  export type oauth_clientsUpdateInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret_hash?: NullableStringFieldUpdateOperationsInput | string | null
    redirect_uris?: oauth_clientsUpdateredirect_urisInput | string[]
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type oauth_clientsUncheckedUpdateInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret_hash?: NullableStringFieldUpdateOperationsInput | string | null
    redirect_uris?: oauth_clientsUpdateredirect_urisInput | string[]
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type oauth_clientsCreateManyInput = {
    client_id: string
    client_secret_hash?: string | null
    redirect_uris?: oauth_clientsCreateredirect_urisInput | string[]
    name?: string | null
  }

  export type oauth_clientsUpdateManyMutationInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret_hash?: NullableStringFieldUpdateOperationsInput | string | null
    redirect_uris?: oauth_clientsUpdateredirect_urisInput | string[]
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type oauth_clientsUncheckedUpdateManyInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    client_secret_hash?: NullableStringFieldUpdateOperationsInput | string | null
    redirect_uris?: oauth_clientsUpdateredirect_urisInput | string[]
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type oauth_usersCreateInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type oauth_usersUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type oauth_usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type oauth_usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type oauth_usersCreateManyInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type oauth_usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type oauth_usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type refresh_tokensCreateInput = {
    token_id: string
    client_id: string
    scope?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutRefresh_tokensInput
  }

  export type refresh_tokensUncheckedCreateInput = {
    token_id: string
    user_id?: string | null
    client_id: string
    scope?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type refresh_tokensUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutRefresh_tokensNestedInput
  }

  export type refresh_tokensUncheckedUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensCreateManyInput = {
    token_id: string
    user_id?: string | null
    client_id: string
    scope?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type refresh_tokensUpdateManyMutationInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUncheckedUpdateManyInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsCreateInput = {
    session_token: string
    expires_at: Date | string
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateInput = {
    id?: number
    session_token: string
    user_id?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type sessionsUpdateInput = {
    session_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsCreateManyInput = {
    id?: number
    session_token: string
    user_id?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type sessionsUpdateManyMutationInput = {
    session_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_token?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    user_logs?: user_logsCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoCreateNestedOneWithoutUsersInput
    programari_medic?: programariCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    user_logs?: user_logsUncheckedCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoUncheckedCreateNestedOneWithoutUsersInput
    programari_medic?: programariUncheckedCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUncheckedUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUncheckedUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUncheckedUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programariCreateInput = {
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutProgramariInput
    medic: usersCreateNestedOneWithoutProgramari_medicInput
  }

  export type programariUncheckedCreateInput = {
    id?: number
    user_id: string
    medic_id: string
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type programariUpdateInput = {
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutProgramariNestedInput
    medic?: usersUpdateOneRequiredWithoutProgramari_medicNestedInput
  }

  export type programariUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    medic_id?: StringFieldUpdateOperationsInput | string
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programariCreateManyInput = {
    id?: number
    user_id: string
    medic_id: string
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type programariUpdateManyMutationInput = {
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programariUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    medic_id?: StringFieldUpdateOperationsInput | string
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type medic_infoCreateInput = {
    id?: string
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutMedic_infoInput
    specialitate: specialitatiCreateNestedOneWithoutMedic_infoInput
    program_lucru?: program_lucruCreateNestedManyWithoutMedic_infoInput
  }

  export type medic_infoUncheckedCreateInput = {
    id?: string
    user_id: string
    specialitate_id: number
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutMedic_infoInput
  }

  export type medic_infoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutMedic_infoNestedInput
    specialitate?: specialitatiUpdateOneRequiredWithoutMedic_infoNestedInput
    program_lucru?: program_lucruUpdateManyWithoutMedic_infoNestedInput
  }

  export type medic_infoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    specialitate_id?: IntFieldUpdateOperationsInput | number
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    program_lucru?: program_lucruUncheckedUpdateManyWithoutMedic_infoNestedInput
  }

  export type medic_infoCreateManyInput = {
    id?: string
    user_id: string
    specialitate_id: number
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type medic_infoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type medic_infoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    specialitate_id?: IntFieldUpdateOperationsInput | number
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type specialitatiCreateInput = {
    nume: string
    descriere?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    medic_info?: medic_infoCreateNestedManyWithoutSpecialitateInput
  }

  export type specialitatiUncheckedCreateInput = {
    id?: number
    nume: string
    descriere?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    medic_info?: medic_infoUncheckedCreateNestedManyWithoutSpecialitateInput
  }

  export type specialitatiUpdateInput = {
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medic_info?: medic_infoUpdateManyWithoutSpecialitateNestedInput
  }

  export type specialitatiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    medic_info?: medic_infoUncheckedUpdateManyWithoutSpecialitateNestedInput
  }

  export type specialitatiCreateManyInput = {
    id?: number
    nume: string
    descriere?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type specialitatiUpdateManyMutationInput = {
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type specialitatiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type program_lucruCreateInput = {
    id?: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutProgram_lucruInput
    medic_info: medic_infoCreateNestedOneWithoutProgram_lucruInput
  }

  export type program_lucruUncheckedCreateInput = {
    id?: string
    medic_id: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type program_lucruUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutProgram_lucruNestedInput
    medic_info?: medic_infoUpdateOneRequiredWithoutProgram_lucruNestedInput
  }

  export type program_lucruUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medic_id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type program_lucruCreateManyInput = {
    id?: string
    medic_id: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type program_lucruUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type program_lucruUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medic_id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_logsCreateInput = {
    id?: string
    action: string
    resource?: string | null
    ip_address?: string | null
    user_agent?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    users?: usersCreateNestedOneWithoutUser_logsInput
  }

  export type user_logsUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    action: string
    resource?: string | null
    ip_address?: string | null
    user_agent?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type user_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutUser_logsNestedInput
  }

  export type user_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_logsCreateManyInput = {
    id?: string
    user_id?: string | null
    action: string
    resource?: string | null
    ip_address?: string | null
    user_agent?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type user_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type auth_keysCountOrderByAggregateInput = {
    kid?: SortOrder
    public_key?: SortOrder
    private_key?: SortOrder
    algorithm?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type auth_keysMaxOrderByAggregateInput = {
    kid?: SortOrder
    public_key?: SortOrder
    private_key?: SortOrder
    algorithm?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type auth_keysMinOrderByAggregateInput = {
    kid?: SortOrder
    public_key?: SortOrder
    private_key?: SortOrder
    algorithm?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type oauth_clientsCountOrderByAggregateInput = {
    client_id?: SortOrder
    client_secret_hash?: SortOrder
    redirect_uris?: SortOrder
    name?: SortOrder
  }

  export type oauth_clientsMaxOrderByAggregateInput = {
    client_id?: SortOrder
    client_secret_hash?: SortOrder
    name?: SortOrder
  }

  export type oauth_clientsMinOrderByAggregateInput = {
    client_id?: SortOrder
    client_secret_hash?: SortOrder
    name?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type oauth_usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type oauth_usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type oauth_usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type refresh_tokensCountOrderByAggregateInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    scope?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type refresh_tokensMaxOrderByAggregateInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    scope?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type refresh_tokensMinOrderByAggregateInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    client_id?: SortOrder
    scope?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    session_token?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProgramariListRelationFilter = {
    every?: programariWhereInput
    some?: programariWhereInput
    none?: programariWhereInput
  }

  export type Refresh_tokensListRelationFilter = {
    every?: refresh_tokensWhereInput
    some?: refresh_tokensWhereInput
    none?: refresh_tokensWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: sessionsWhereInput
    some?: sessionsWhereInput
    none?: sessionsWhereInput
  }

  export type User_logsListRelationFilter = {
    every?: user_logsWhereInput
    some?: user_logsWhereInput
    none?: user_logsWhereInput
  }

  export type Medic_infoNullableRelationFilter = {
    is?: medic_infoWhereInput | null
    isNot?: medic_infoWhereInput | null
  }

  export type Program_lucruListRelationFilter = {
    every?: program_lucruWhereInput
    some?: program_lucruWhereInput
    none?: program_lucruWhereInput
  }

  export type programariOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type refresh_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type program_lucruOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type programariCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medic_id?: SortOrder
    serviciu?: SortOrder
    data_programare?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type programariAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type programariMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medic_id?: SortOrder
    serviciu?: SortOrder
    data_programare?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type programariMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    medic_id?: SortOrder
    serviciu?: SortOrder
    data_programare?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type programariSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SpecialitatiRelationFilter = {
    is?: specialitatiWhereInput
    isNot?: specialitatiWhereInput
  }

  export type medic_infoCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialitate_id?: SortOrder
    titlu?: SortOrder
    experienta_ani?: SortOrder
    telefon?: SortOrder
    cabinet?: SortOrder
    pret_consultatie?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type medic_infoAvgOrderByAggregateInput = {
    specialitate_id?: SortOrder
    experienta_ani?: SortOrder
    pret_consultatie?: SortOrder
    rating?: SortOrder
  }

  export type medic_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialitate_id?: SortOrder
    titlu?: SortOrder
    experienta_ani?: SortOrder
    telefon?: SortOrder
    cabinet?: SortOrder
    pret_consultatie?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type medic_infoMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialitate_id?: SortOrder
    titlu?: SortOrder
    experienta_ani?: SortOrder
    telefon?: SortOrder
    cabinet?: SortOrder
    pret_consultatie?: SortOrder
    bio?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type medic_infoSumOrderByAggregateInput = {
    specialitate_id?: SortOrder
    experienta_ani?: SortOrder
    pret_consultatie?: SortOrder
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Medic_infoListRelationFilter = {
    every?: medic_infoWhereInput
    some?: medic_infoWhereInput
    none?: medic_infoWhereInput
  }

  export type medic_infoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type specialitatiCountOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type specialitatiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type specialitatiMaxOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type specialitatiMinOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type specialitatiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Medic_infoRelationFilter = {
    is?: medic_infoWhereInput
    isNot?: medic_infoWhereInput
  }

  export type program_lucruCountOrderByAggregateInput = {
    id?: SortOrder
    medic_id?: SortOrder
    zi_saptamana?: SortOrder
    ora_inceput?: SortOrder
    ora_sfarsit?: SortOrder
    este_activ?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type program_lucruAvgOrderByAggregateInput = {
    zi_saptamana?: SortOrder
  }

  export type program_lucruMaxOrderByAggregateInput = {
    id?: SortOrder
    medic_id?: SortOrder
    zi_saptamana?: SortOrder
    ora_inceput?: SortOrder
    ora_sfarsit?: SortOrder
    este_activ?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type program_lucruMinOrderByAggregateInput = {
    id?: SortOrder
    medic_id?: SortOrder
    zi_saptamana?: SortOrder
    ora_inceput?: SortOrder
    ora_sfarsit?: SortOrder
    este_activ?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type program_lucruSumOrderByAggregateInput = {
    zi_saptamana?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type user_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
  }

  export type user_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type user_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type oauth_clientsCreateredirect_urisInput = {
    set: string[]
  }

  export type oauth_clientsUpdateredirect_urisInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersCreateNestedOneWithoutRefresh_tokensInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutRefresh_tokensNestedInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    upsert?: usersUpsertWithoutRefresh_tokensInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRefresh_tokensInput, usersUpdateWithoutRefresh_tokensInput>, usersUncheckedUpdateWithoutRefresh_tokensInput>
  }

  export type usersCreateNestedOneWithoutSessionsInput = {
    create?: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionsInput
    upsert?: usersUpsertWithoutSessionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSessionsInput, usersUpdateWithoutSessionsInput>, usersUncheckedUpdateWithoutSessionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type programariCreateNestedManyWithoutUsersInput = {
    create?: XOR<programariCreateWithoutUsersInput, programariUncheckedCreateWithoutUsersInput> | programariCreateWithoutUsersInput[] | programariUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: programariCreateOrConnectWithoutUsersInput | programariCreateOrConnectWithoutUsersInput[]
    createMany?: programariCreateManyUsersInputEnvelope
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
  }

  export type refresh_tokensCreateNestedManyWithoutUsersInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
  }

  export type sessionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type user_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_logsCreateWithoutUsersInput, user_logsUncheckedCreateWithoutUsersInput> | user_logsCreateWithoutUsersInput[] | user_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_logsCreateOrConnectWithoutUsersInput | user_logsCreateOrConnectWithoutUsersInput[]
    createMany?: user_logsCreateManyUsersInputEnvelope
    connect?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
  }

  export type medic_infoCreateNestedOneWithoutUsersInput = {
    create?: XOR<medic_infoCreateWithoutUsersInput, medic_infoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: medic_infoCreateOrConnectWithoutUsersInput
    connect?: medic_infoWhereUniqueInput
  }

  export type programariCreateNestedManyWithoutMedicInput = {
    create?: XOR<programariCreateWithoutMedicInput, programariUncheckedCreateWithoutMedicInput> | programariCreateWithoutMedicInput[] | programariUncheckedCreateWithoutMedicInput[]
    connectOrCreate?: programariCreateOrConnectWithoutMedicInput | programariCreateOrConnectWithoutMedicInput[]
    createMany?: programariCreateManyMedicInputEnvelope
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
  }

  export type program_lucruCreateNestedManyWithoutUsersInput = {
    create?: XOR<program_lucruCreateWithoutUsersInput, program_lucruUncheckedCreateWithoutUsersInput> | program_lucruCreateWithoutUsersInput[] | program_lucruUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutUsersInput | program_lucruCreateOrConnectWithoutUsersInput[]
    createMany?: program_lucruCreateManyUsersInputEnvelope
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
  }

  export type programariUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<programariCreateWithoutUsersInput, programariUncheckedCreateWithoutUsersInput> | programariCreateWithoutUsersInput[] | programariUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: programariCreateOrConnectWithoutUsersInput | programariCreateOrConnectWithoutUsersInput[]
    createMany?: programariCreateManyUsersInputEnvelope
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
  }

  export type refresh_tokensUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type user_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_logsCreateWithoutUsersInput, user_logsUncheckedCreateWithoutUsersInput> | user_logsCreateWithoutUsersInput[] | user_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_logsCreateOrConnectWithoutUsersInput | user_logsCreateOrConnectWithoutUsersInput[]
    createMany?: user_logsCreateManyUsersInputEnvelope
    connect?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
  }

  export type medic_infoUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<medic_infoCreateWithoutUsersInput, medic_infoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: medic_infoCreateOrConnectWithoutUsersInput
    connect?: medic_infoWhereUniqueInput
  }

  export type programariUncheckedCreateNestedManyWithoutMedicInput = {
    create?: XOR<programariCreateWithoutMedicInput, programariUncheckedCreateWithoutMedicInput> | programariCreateWithoutMedicInput[] | programariUncheckedCreateWithoutMedicInput[]
    connectOrCreate?: programariCreateOrConnectWithoutMedicInput | programariCreateOrConnectWithoutMedicInput[]
    createMany?: programariCreateManyMedicInputEnvelope
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
  }

  export type program_lucruUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<program_lucruCreateWithoutUsersInput, program_lucruUncheckedCreateWithoutUsersInput> | program_lucruCreateWithoutUsersInput[] | program_lucruUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutUsersInput | program_lucruCreateOrConnectWithoutUsersInput[]
    createMany?: program_lucruCreateManyUsersInputEnvelope
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
  }

  export type programariUpdateManyWithoutUsersNestedInput = {
    create?: XOR<programariCreateWithoutUsersInput, programariUncheckedCreateWithoutUsersInput> | programariCreateWithoutUsersInput[] | programariUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: programariCreateOrConnectWithoutUsersInput | programariCreateOrConnectWithoutUsersInput[]
    upsert?: programariUpsertWithWhereUniqueWithoutUsersInput | programariUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: programariCreateManyUsersInputEnvelope
    set?: programariWhereUniqueInput | programariWhereUniqueInput[]
    disconnect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    delete?: programariWhereUniqueInput | programariWhereUniqueInput[]
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    update?: programariUpdateWithWhereUniqueWithoutUsersInput | programariUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: programariUpdateManyWithWhereWithoutUsersInput | programariUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: programariScalarWhereInput | programariScalarWhereInput[]
  }

  export type refresh_tokensUpdateManyWithoutUsersNestedInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: refresh_tokensUpsertWithWhereUniqueWithoutUsersInput | refresh_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    disconnect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    delete?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    update?: refresh_tokensUpdateWithWhereUniqueWithoutUsersInput | refresh_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: refresh_tokensUpdateManyWithWhereWithoutUsersInput | refresh_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
  }

  export type sessionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutUsersInput | sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutUsersInput | sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutUsersInput | sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type user_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_logsCreateWithoutUsersInput, user_logsUncheckedCreateWithoutUsersInput> | user_logsCreateWithoutUsersInput[] | user_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_logsCreateOrConnectWithoutUsersInput | user_logsCreateOrConnectWithoutUsersInput[]
    upsert?: user_logsUpsertWithWhereUniqueWithoutUsersInput | user_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_logsCreateManyUsersInputEnvelope
    set?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    disconnect?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    delete?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    connect?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    update?: user_logsUpdateWithWhereUniqueWithoutUsersInput | user_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_logsUpdateManyWithWhereWithoutUsersInput | user_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_logsScalarWhereInput | user_logsScalarWhereInput[]
  }

  export type medic_infoUpdateOneWithoutUsersNestedInput = {
    create?: XOR<medic_infoCreateWithoutUsersInput, medic_infoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: medic_infoCreateOrConnectWithoutUsersInput
    upsert?: medic_infoUpsertWithoutUsersInput
    disconnect?: medic_infoWhereInput | boolean
    delete?: medic_infoWhereInput | boolean
    connect?: medic_infoWhereUniqueInput
    update?: XOR<XOR<medic_infoUpdateToOneWithWhereWithoutUsersInput, medic_infoUpdateWithoutUsersInput>, medic_infoUncheckedUpdateWithoutUsersInput>
  }

  export type programariUpdateManyWithoutMedicNestedInput = {
    create?: XOR<programariCreateWithoutMedicInput, programariUncheckedCreateWithoutMedicInput> | programariCreateWithoutMedicInput[] | programariUncheckedCreateWithoutMedicInput[]
    connectOrCreate?: programariCreateOrConnectWithoutMedicInput | programariCreateOrConnectWithoutMedicInput[]
    upsert?: programariUpsertWithWhereUniqueWithoutMedicInput | programariUpsertWithWhereUniqueWithoutMedicInput[]
    createMany?: programariCreateManyMedicInputEnvelope
    set?: programariWhereUniqueInput | programariWhereUniqueInput[]
    disconnect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    delete?: programariWhereUniqueInput | programariWhereUniqueInput[]
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    update?: programariUpdateWithWhereUniqueWithoutMedicInput | programariUpdateWithWhereUniqueWithoutMedicInput[]
    updateMany?: programariUpdateManyWithWhereWithoutMedicInput | programariUpdateManyWithWhereWithoutMedicInput[]
    deleteMany?: programariScalarWhereInput | programariScalarWhereInput[]
  }

  export type program_lucruUpdateManyWithoutUsersNestedInput = {
    create?: XOR<program_lucruCreateWithoutUsersInput, program_lucruUncheckedCreateWithoutUsersInput> | program_lucruCreateWithoutUsersInput[] | program_lucruUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutUsersInput | program_lucruCreateOrConnectWithoutUsersInput[]
    upsert?: program_lucruUpsertWithWhereUniqueWithoutUsersInput | program_lucruUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: program_lucruCreateManyUsersInputEnvelope
    set?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    disconnect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    delete?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    update?: program_lucruUpdateWithWhereUniqueWithoutUsersInput | program_lucruUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: program_lucruUpdateManyWithWhereWithoutUsersInput | program_lucruUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: program_lucruScalarWhereInput | program_lucruScalarWhereInput[]
  }

  export type programariUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<programariCreateWithoutUsersInput, programariUncheckedCreateWithoutUsersInput> | programariCreateWithoutUsersInput[] | programariUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: programariCreateOrConnectWithoutUsersInput | programariCreateOrConnectWithoutUsersInput[]
    upsert?: programariUpsertWithWhereUniqueWithoutUsersInput | programariUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: programariCreateManyUsersInputEnvelope
    set?: programariWhereUniqueInput | programariWhereUniqueInput[]
    disconnect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    delete?: programariWhereUniqueInput | programariWhereUniqueInput[]
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    update?: programariUpdateWithWhereUniqueWithoutUsersInput | programariUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: programariUpdateManyWithWhereWithoutUsersInput | programariUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: programariScalarWhereInput | programariScalarWhereInput[]
  }

  export type refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: refresh_tokensUpsertWithWhereUniqueWithoutUsersInput | refresh_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    disconnect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    delete?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    update?: refresh_tokensUpdateWithWhereUniqueWithoutUsersInput | refresh_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: refresh_tokensUpdateManyWithWhereWithoutUsersInput | refresh_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutUsersInput | sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutUsersInput | sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutUsersInput | sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type user_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_logsCreateWithoutUsersInput, user_logsUncheckedCreateWithoutUsersInput> | user_logsCreateWithoutUsersInput[] | user_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_logsCreateOrConnectWithoutUsersInput | user_logsCreateOrConnectWithoutUsersInput[]
    upsert?: user_logsUpsertWithWhereUniqueWithoutUsersInput | user_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_logsCreateManyUsersInputEnvelope
    set?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    disconnect?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    delete?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    connect?: user_logsWhereUniqueInput | user_logsWhereUniqueInput[]
    update?: user_logsUpdateWithWhereUniqueWithoutUsersInput | user_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_logsUpdateManyWithWhereWithoutUsersInput | user_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_logsScalarWhereInput | user_logsScalarWhereInput[]
  }

  export type medic_infoUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<medic_infoCreateWithoutUsersInput, medic_infoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: medic_infoCreateOrConnectWithoutUsersInput
    upsert?: medic_infoUpsertWithoutUsersInput
    disconnect?: medic_infoWhereInput | boolean
    delete?: medic_infoWhereInput | boolean
    connect?: medic_infoWhereUniqueInput
    update?: XOR<XOR<medic_infoUpdateToOneWithWhereWithoutUsersInput, medic_infoUpdateWithoutUsersInput>, medic_infoUncheckedUpdateWithoutUsersInput>
  }

  export type programariUncheckedUpdateManyWithoutMedicNestedInput = {
    create?: XOR<programariCreateWithoutMedicInput, programariUncheckedCreateWithoutMedicInput> | programariCreateWithoutMedicInput[] | programariUncheckedCreateWithoutMedicInput[]
    connectOrCreate?: programariCreateOrConnectWithoutMedicInput | programariCreateOrConnectWithoutMedicInput[]
    upsert?: programariUpsertWithWhereUniqueWithoutMedicInput | programariUpsertWithWhereUniqueWithoutMedicInput[]
    createMany?: programariCreateManyMedicInputEnvelope
    set?: programariWhereUniqueInput | programariWhereUniqueInput[]
    disconnect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    delete?: programariWhereUniqueInput | programariWhereUniqueInput[]
    connect?: programariWhereUniqueInput | programariWhereUniqueInput[]
    update?: programariUpdateWithWhereUniqueWithoutMedicInput | programariUpdateWithWhereUniqueWithoutMedicInput[]
    updateMany?: programariUpdateManyWithWhereWithoutMedicInput | programariUpdateManyWithWhereWithoutMedicInput[]
    deleteMany?: programariScalarWhereInput | programariScalarWhereInput[]
  }

  export type program_lucruUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<program_lucruCreateWithoutUsersInput, program_lucruUncheckedCreateWithoutUsersInput> | program_lucruCreateWithoutUsersInput[] | program_lucruUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutUsersInput | program_lucruCreateOrConnectWithoutUsersInput[]
    upsert?: program_lucruUpsertWithWhereUniqueWithoutUsersInput | program_lucruUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: program_lucruCreateManyUsersInputEnvelope
    set?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    disconnect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    delete?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    update?: program_lucruUpdateWithWhereUniqueWithoutUsersInput | program_lucruUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: program_lucruUpdateManyWithWhereWithoutUsersInput | program_lucruUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: program_lucruScalarWhereInput | program_lucruScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutProgramariInput = {
    create?: XOR<usersCreateWithoutProgramariInput, usersUncheckedCreateWithoutProgramariInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgramariInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProgramari_medicInput = {
    create?: XOR<usersCreateWithoutProgramari_medicInput, usersUncheckedCreateWithoutProgramari_medicInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgramari_medicInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutProgramariNestedInput = {
    create?: XOR<usersCreateWithoutProgramariInput, usersUncheckedCreateWithoutProgramariInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgramariInput
    upsert?: usersUpsertWithoutProgramariInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProgramariInput, usersUpdateWithoutProgramariInput>, usersUncheckedUpdateWithoutProgramariInput>
  }

  export type usersUpdateOneRequiredWithoutProgramari_medicNestedInput = {
    create?: XOR<usersCreateWithoutProgramari_medicInput, usersUncheckedCreateWithoutProgramari_medicInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgramari_medicInput
    upsert?: usersUpsertWithoutProgramari_medicInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProgramari_medicInput, usersUpdateWithoutProgramari_medicInput>, usersUncheckedUpdateWithoutProgramari_medicInput>
  }

  export type usersCreateNestedOneWithoutMedic_infoInput = {
    create?: XOR<usersCreateWithoutMedic_infoInput, usersUncheckedCreateWithoutMedic_infoInput>
    connectOrCreate?: usersCreateOrConnectWithoutMedic_infoInput
    connect?: usersWhereUniqueInput
  }

  export type specialitatiCreateNestedOneWithoutMedic_infoInput = {
    create?: XOR<specialitatiCreateWithoutMedic_infoInput, specialitatiUncheckedCreateWithoutMedic_infoInput>
    connectOrCreate?: specialitatiCreateOrConnectWithoutMedic_infoInput
    connect?: specialitatiWhereUniqueInput
  }

  export type program_lucruCreateNestedManyWithoutMedic_infoInput = {
    create?: XOR<program_lucruCreateWithoutMedic_infoInput, program_lucruUncheckedCreateWithoutMedic_infoInput> | program_lucruCreateWithoutMedic_infoInput[] | program_lucruUncheckedCreateWithoutMedic_infoInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutMedic_infoInput | program_lucruCreateOrConnectWithoutMedic_infoInput[]
    createMany?: program_lucruCreateManyMedic_infoInputEnvelope
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
  }

  export type program_lucruUncheckedCreateNestedManyWithoutMedic_infoInput = {
    create?: XOR<program_lucruCreateWithoutMedic_infoInput, program_lucruUncheckedCreateWithoutMedic_infoInput> | program_lucruCreateWithoutMedic_infoInput[] | program_lucruUncheckedCreateWithoutMedic_infoInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutMedic_infoInput | program_lucruCreateOrConnectWithoutMedic_infoInput[]
    createMany?: program_lucruCreateManyMedic_infoInputEnvelope
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutMedic_infoNestedInput = {
    create?: XOR<usersCreateWithoutMedic_infoInput, usersUncheckedCreateWithoutMedic_infoInput>
    connectOrCreate?: usersCreateOrConnectWithoutMedic_infoInput
    upsert?: usersUpsertWithoutMedic_infoInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMedic_infoInput, usersUpdateWithoutMedic_infoInput>, usersUncheckedUpdateWithoutMedic_infoInput>
  }

  export type specialitatiUpdateOneRequiredWithoutMedic_infoNestedInput = {
    create?: XOR<specialitatiCreateWithoutMedic_infoInput, specialitatiUncheckedCreateWithoutMedic_infoInput>
    connectOrCreate?: specialitatiCreateOrConnectWithoutMedic_infoInput
    upsert?: specialitatiUpsertWithoutMedic_infoInput
    connect?: specialitatiWhereUniqueInput
    update?: XOR<XOR<specialitatiUpdateToOneWithWhereWithoutMedic_infoInput, specialitatiUpdateWithoutMedic_infoInput>, specialitatiUncheckedUpdateWithoutMedic_infoInput>
  }

  export type program_lucruUpdateManyWithoutMedic_infoNestedInput = {
    create?: XOR<program_lucruCreateWithoutMedic_infoInput, program_lucruUncheckedCreateWithoutMedic_infoInput> | program_lucruCreateWithoutMedic_infoInput[] | program_lucruUncheckedCreateWithoutMedic_infoInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutMedic_infoInput | program_lucruCreateOrConnectWithoutMedic_infoInput[]
    upsert?: program_lucruUpsertWithWhereUniqueWithoutMedic_infoInput | program_lucruUpsertWithWhereUniqueWithoutMedic_infoInput[]
    createMany?: program_lucruCreateManyMedic_infoInputEnvelope
    set?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    disconnect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    delete?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    update?: program_lucruUpdateWithWhereUniqueWithoutMedic_infoInput | program_lucruUpdateWithWhereUniqueWithoutMedic_infoInput[]
    updateMany?: program_lucruUpdateManyWithWhereWithoutMedic_infoInput | program_lucruUpdateManyWithWhereWithoutMedic_infoInput[]
    deleteMany?: program_lucruScalarWhereInput | program_lucruScalarWhereInput[]
  }

  export type program_lucruUncheckedUpdateManyWithoutMedic_infoNestedInput = {
    create?: XOR<program_lucruCreateWithoutMedic_infoInput, program_lucruUncheckedCreateWithoutMedic_infoInput> | program_lucruCreateWithoutMedic_infoInput[] | program_lucruUncheckedCreateWithoutMedic_infoInput[]
    connectOrCreate?: program_lucruCreateOrConnectWithoutMedic_infoInput | program_lucruCreateOrConnectWithoutMedic_infoInput[]
    upsert?: program_lucruUpsertWithWhereUniqueWithoutMedic_infoInput | program_lucruUpsertWithWhereUniqueWithoutMedic_infoInput[]
    createMany?: program_lucruCreateManyMedic_infoInputEnvelope
    set?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    disconnect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    delete?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    connect?: program_lucruWhereUniqueInput | program_lucruWhereUniqueInput[]
    update?: program_lucruUpdateWithWhereUniqueWithoutMedic_infoInput | program_lucruUpdateWithWhereUniqueWithoutMedic_infoInput[]
    updateMany?: program_lucruUpdateManyWithWhereWithoutMedic_infoInput | program_lucruUpdateManyWithWhereWithoutMedic_infoInput[]
    deleteMany?: program_lucruScalarWhereInput | program_lucruScalarWhereInput[]
  }

  export type medic_infoCreateNestedManyWithoutSpecialitateInput = {
    create?: XOR<medic_infoCreateWithoutSpecialitateInput, medic_infoUncheckedCreateWithoutSpecialitateInput> | medic_infoCreateWithoutSpecialitateInput[] | medic_infoUncheckedCreateWithoutSpecialitateInput[]
    connectOrCreate?: medic_infoCreateOrConnectWithoutSpecialitateInput | medic_infoCreateOrConnectWithoutSpecialitateInput[]
    createMany?: medic_infoCreateManySpecialitateInputEnvelope
    connect?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
  }

  export type medic_infoUncheckedCreateNestedManyWithoutSpecialitateInput = {
    create?: XOR<medic_infoCreateWithoutSpecialitateInput, medic_infoUncheckedCreateWithoutSpecialitateInput> | medic_infoCreateWithoutSpecialitateInput[] | medic_infoUncheckedCreateWithoutSpecialitateInput[]
    connectOrCreate?: medic_infoCreateOrConnectWithoutSpecialitateInput | medic_infoCreateOrConnectWithoutSpecialitateInput[]
    createMany?: medic_infoCreateManySpecialitateInputEnvelope
    connect?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
  }

  export type medic_infoUpdateManyWithoutSpecialitateNestedInput = {
    create?: XOR<medic_infoCreateWithoutSpecialitateInput, medic_infoUncheckedCreateWithoutSpecialitateInput> | medic_infoCreateWithoutSpecialitateInput[] | medic_infoUncheckedCreateWithoutSpecialitateInput[]
    connectOrCreate?: medic_infoCreateOrConnectWithoutSpecialitateInput | medic_infoCreateOrConnectWithoutSpecialitateInput[]
    upsert?: medic_infoUpsertWithWhereUniqueWithoutSpecialitateInput | medic_infoUpsertWithWhereUniqueWithoutSpecialitateInput[]
    createMany?: medic_infoCreateManySpecialitateInputEnvelope
    set?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    disconnect?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    delete?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    connect?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    update?: medic_infoUpdateWithWhereUniqueWithoutSpecialitateInput | medic_infoUpdateWithWhereUniqueWithoutSpecialitateInput[]
    updateMany?: medic_infoUpdateManyWithWhereWithoutSpecialitateInput | medic_infoUpdateManyWithWhereWithoutSpecialitateInput[]
    deleteMany?: medic_infoScalarWhereInput | medic_infoScalarWhereInput[]
  }

  export type medic_infoUncheckedUpdateManyWithoutSpecialitateNestedInput = {
    create?: XOR<medic_infoCreateWithoutSpecialitateInput, medic_infoUncheckedCreateWithoutSpecialitateInput> | medic_infoCreateWithoutSpecialitateInput[] | medic_infoUncheckedCreateWithoutSpecialitateInput[]
    connectOrCreate?: medic_infoCreateOrConnectWithoutSpecialitateInput | medic_infoCreateOrConnectWithoutSpecialitateInput[]
    upsert?: medic_infoUpsertWithWhereUniqueWithoutSpecialitateInput | medic_infoUpsertWithWhereUniqueWithoutSpecialitateInput[]
    createMany?: medic_infoCreateManySpecialitateInputEnvelope
    set?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    disconnect?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    delete?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    connect?: medic_infoWhereUniqueInput | medic_infoWhereUniqueInput[]
    update?: medic_infoUpdateWithWhereUniqueWithoutSpecialitateInput | medic_infoUpdateWithWhereUniqueWithoutSpecialitateInput[]
    updateMany?: medic_infoUpdateManyWithWhereWithoutSpecialitateInput | medic_infoUpdateManyWithWhereWithoutSpecialitateInput[]
    deleteMany?: medic_infoScalarWhereInput | medic_infoScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutProgram_lucruInput = {
    create?: XOR<usersCreateWithoutProgram_lucruInput, usersUncheckedCreateWithoutProgram_lucruInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgram_lucruInput
    connect?: usersWhereUniqueInput
  }

  export type medic_infoCreateNestedOneWithoutProgram_lucruInput = {
    create?: XOR<medic_infoCreateWithoutProgram_lucruInput, medic_infoUncheckedCreateWithoutProgram_lucruInput>
    connectOrCreate?: medic_infoCreateOrConnectWithoutProgram_lucruInput
    connect?: medic_infoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutProgram_lucruNestedInput = {
    create?: XOR<usersCreateWithoutProgram_lucruInput, usersUncheckedCreateWithoutProgram_lucruInput>
    connectOrCreate?: usersCreateOrConnectWithoutProgram_lucruInput
    upsert?: usersUpsertWithoutProgram_lucruInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProgram_lucruInput, usersUpdateWithoutProgram_lucruInput>, usersUncheckedUpdateWithoutProgram_lucruInput>
  }

  export type medic_infoUpdateOneRequiredWithoutProgram_lucruNestedInput = {
    create?: XOR<medic_infoCreateWithoutProgram_lucruInput, medic_infoUncheckedCreateWithoutProgram_lucruInput>
    connectOrCreate?: medic_infoCreateOrConnectWithoutProgram_lucruInput
    upsert?: medic_infoUpsertWithoutProgram_lucruInput
    connect?: medic_infoWhereUniqueInput
    update?: XOR<XOR<medic_infoUpdateToOneWithWhereWithoutProgram_lucruInput, medic_infoUpdateWithoutProgram_lucruInput>, medic_infoUncheckedUpdateWithoutProgram_lucruInput>
  }

  export type usersCreateNestedOneWithoutUser_logsInput = {
    create?: XOR<usersCreateWithoutUser_logsInput, usersUncheckedCreateWithoutUser_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_logsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutUser_logsNestedInput = {
    create?: XOR<usersCreateWithoutUser_logsInput, usersUncheckedCreateWithoutUser_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_logsInput
    upsert?: usersUpsertWithoutUser_logsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_logsInput, usersUpdateWithoutUser_logsInput>, usersUncheckedUpdateWithoutUser_logsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type usersCreateWithoutRefresh_tokensInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    user_logs?: user_logsCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoCreateNestedOneWithoutUsersInput
    programari_medic?: programariCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRefresh_tokensInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    user_logs?: user_logsUncheckedCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoUncheckedCreateNestedOneWithoutUsersInput
    programari_medic?: programariUncheckedCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRefresh_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
  }

  export type usersUpsertWithoutRefresh_tokensInput = {
    update: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRefresh_tokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
  }

  export type usersUpdateWithoutRefresh_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRefresh_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUncheckedUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUncheckedUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUncheckedUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    user_logs?: user_logsCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoCreateNestedOneWithoutUsersInput
    programari_medic?: programariCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    user_logs?: user_logsUncheckedCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoUncheckedCreateNestedOneWithoutUsersInput
    programari_medic?: programariUncheckedCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSessionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
  }

  export type usersUpsertWithoutSessionsInput = {
    update: XOR<usersUpdateWithoutSessionsInput, usersUncheckedUpdateWithoutSessionsInput>
    create: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSessionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSessionsInput, usersUncheckedUpdateWithoutSessionsInput>
  }

  export type usersUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUncheckedUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUncheckedUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUncheckedUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type programariCreateWithoutUsersInput = {
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    medic: usersCreateNestedOneWithoutProgramari_medicInput
  }

  export type programariUncheckedCreateWithoutUsersInput = {
    id?: number
    medic_id: string
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type programariCreateOrConnectWithoutUsersInput = {
    where: programariWhereUniqueInput
    create: XOR<programariCreateWithoutUsersInput, programariUncheckedCreateWithoutUsersInput>
  }

  export type programariCreateManyUsersInputEnvelope = {
    data: programariCreateManyUsersInput | programariCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type refresh_tokensCreateWithoutUsersInput = {
    token_id: string
    client_id: string
    scope?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type refresh_tokensUncheckedCreateWithoutUsersInput = {
    token_id: string
    client_id: string
    scope?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type refresh_tokensCreateOrConnectWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensCreateManyUsersInputEnvelope = {
    data: refresh_tokensCreateManyUsersInput | refresh_tokensCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type sessionsCreateWithoutUsersInput = {
    session_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type sessionsUncheckedCreateWithoutUsersInput = {
    id?: number
    session_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type sessionsCreateOrConnectWithoutUsersInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput>
  }

  export type sessionsCreateManyUsersInputEnvelope = {
    data: sessionsCreateManyUsersInput | sessionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_logsCreateWithoutUsersInput = {
    id?: string
    action: string
    resource?: string | null
    ip_address?: string | null
    user_agent?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type user_logsUncheckedCreateWithoutUsersInput = {
    id?: string
    action: string
    resource?: string | null
    ip_address?: string | null
    user_agent?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type user_logsCreateOrConnectWithoutUsersInput = {
    where: user_logsWhereUniqueInput
    create: XOR<user_logsCreateWithoutUsersInput, user_logsUncheckedCreateWithoutUsersInput>
  }

  export type user_logsCreateManyUsersInputEnvelope = {
    data: user_logsCreateManyUsersInput | user_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type medic_infoCreateWithoutUsersInput = {
    id?: string
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    specialitate: specialitatiCreateNestedOneWithoutMedic_infoInput
    program_lucru?: program_lucruCreateNestedManyWithoutMedic_infoInput
  }

  export type medic_infoUncheckedCreateWithoutUsersInput = {
    id?: string
    specialitate_id: number
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutMedic_infoInput
  }

  export type medic_infoCreateOrConnectWithoutUsersInput = {
    where: medic_infoWhereUniqueInput
    create: XOR<medic_infoCreateWithoutUsersInput, medic_infoUncheckedCreateWithoutUsersInput>
  }

  export type programariCreateWithoutMedicInput = {
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutProgramariInput
  }

  export type programariUncheckedCreateWithoutMedicInput = {
    id?: number
    user_id: string
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type programariCreateOrConnectWithoutMedicInput = {
    where: programariWhereUniqueInput
    create: XOR<programariCreateWithoutMedicInput, programariUncheckedCreateWithoutMedicInput>
  }

  export type programariCreateManyMedicInputEnvelope = {
    data: programariCreateManyMedicInput | programariCreateManyMedicInput[]
    skipDuplicates?: boolean
  }

  export type program_lucruCreateWithoutUsersInput = {
    id?: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    medic_info: medic_infoCreateNestedOneWithoutProgram_lucruInput
  }

  export type program_lucruUncheckedCreateWithoutUsersInput = {
    id?: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type program_lucruCreateOrConnectWithoutUsersInput = {
    where: program_lucruWhereUniqueInput
    create: XOR<program_lucruCreateWithoutUsersInput, program_lucruUncheckedCreateWithoutUsersInput>
  }

  export type program_lucruCreateManyUsersInputEnvelope = {
    data: program_lucruCreateManyUsersInput | program_lucruCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type programariUpsertWithWhereUniqueWithoutUsersInput = {
    where: programariWhereUniqueInput
    update: XOR<programariUpdateWithoutUsersInput, programariUncheckedUpdateWithoutUsersInput>
    create: XOR<programariCreateWithoutUsersInput, programariUncheckedCreateWithoutUsersInput>
  }

  export type programariUpdateWithWhereUniqueWithoutUsersInput = {
    where: programariWhereUniqueInput
    data: XOR<programariUpdateWithoutUsersInput, programariUncheckedUpdateWithoutUsersInput>
  }

  export type programariUpdateManyWithWhereWithoutUsersInput = {
    where: programariScalarWhereInput
    data: XOR<programariUpdateManyMutationInput, programariUncheckedUpdateManyWithoutUsersInput>
  }

  export type programariScalarWhereInput = {
    AND?: programariScalarWhereInput | programariScalarWhereInput[]
    OR?: programariScalarWhereInput[]
    NOT?: programariScalarWhereInput | programariScalarWhereInput[]
    id?: IntFilter<"programari"> | number
    user_id?: UuidFilter<"programari"> | string
    medic_id?: UuidFilter<"programari"> | string
    serviciu?: StringFilter<"programari"> | string
    data_programare?: DateTimeFilter<"programari"> | Date | string
    status?: StringNullableFilter<"programari"> | string | null
    created_at?: DateTimeNullableFilter<"programari"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"programari"> | Date | string | null
  }

  export type refresh_tokensUpsertWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    update: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensUpdateWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    data: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
  }

  export type refresh_tokensUpdateManyWithWhereWithoutUsersInput = {
    where: refresh_tokensScalarWhereInput
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyWithoutUsersInput>
  }

  export type refresh_tokensScalarWhereInput = {
    AND?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
    OR?: refresh_tokensScalarWhereInput[]
    NOT?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
    token_id?: StringFilter<"refresh_tokens"> | string
    user_id?: UuidNullableFilter<"refresh_tokens"> | string | null
    client_id?: StringFilter<"refresh_tokens"> | string
    scope?: StringNullableFilter<"refresh_tokens"> | string | null
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
  }

  export type sessionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutUsersInput, sessionsUncheckedUpdateWithoutUsersInput>
    create: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutUsersInput, sessionsUncheckedUpdateWithoutUsersInput>
  }

  export type sessionsUpdateManyWithWhereWithoutUsersInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type sessionsScalarWhereInput = {
    AND?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    OR?: sessionsScalarWhereInput[]
    NOT?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    id?: IntFilter<"sessions"> | number
    session_token?: StringFilter<"sessions"> | string
    user_id?: UuidNullableFilter<"sessions"> | string | null
    expires_at?: DateTimeFilter<"sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
  }

  export type user_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_logsWhereUniqueInput
    update: XOR<user_logsUpdateWithoutUsersInput, user_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_logsCreateWithoutUsersInput, user_logsUncheckedCreateWithoutUsersInput>
  }

  export type user_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_logsWhereUniqueInput
    data: XOR<user_logsUpdateWithoutUsersInput, user_logsUncheckedUpdateWithoutUsersInput>
  }

  export type user_logsUpdateManyWithWhereWithoutUsersInput = {
    where: user_logsScalarWhereInput
    data: XOR<user_logsUpdateManyMutationInput, user_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_logsScalarWhereInput = {
    AND?: user_logsScalarWhereInput | user_logsScalarWhereInput[]
    OR?: user_logsScalarWhereInput[]
    NOT?: user_logsScalarWhereInput | user_logsScalarWhereInput[]
    id?: UuidFilter<"user_logs"> | string
    user_id?: UuidNullableFilter<"user_logs"> | string | null
    action?: StringFilter<"user_logs"> | string
    resource?: StringNullableFilter<"user_logs"> | string | null
    ip_address?: StringNullableFilter<"user_logs"> | string | null
    user_agent?: StringNullableFilter<"user_logs"> | string | null
    details?: JsonNullableFilter<"user_logs">
    created_at?: DateTimeFilter<"user_logs"> | Date | string
  }

  export type medic_infoUpsertWithoutUsersInput = {
    update: XOR<medic_infoUpdateWithoutUsersInput, medic_infoUncheckedUpdateWithoutUsersInput>
    create: XOR<medic_infoCreateWithoutUsersInput, medic_infoUncheckedCreateWithoutUsersInput>
    where?: medic_infoWhereInput
  }

  export type medic_infoUpdateToOneWithWhereWithoutUsersInput = {
    where?: medic_infoWhereInput
    data: XOR<medic_infoUpdateWithoutUsersInput, medic_infoUncheckedUpdateWithoutUsersInput>
  }

  export type medic_infoUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialitate?: specialitatiUpdateOneRequiredWithoutMedic_infoNestedInput
    program_lucru?: program_lucruUpdateManyWithoutMedic_infoNestedInput
  }

  export type medic_infoUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialitate_id?: IntFieldUpdateOperationsInput | number
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    program_lucru?: program_lucruUncheckedUpdateManyWithoutMedic_infoNestedInput
  }

  export type programariUpsertWithWhereUniqueWithoutMedicInput = {
    where: programariWhereUniqueInput
    update: XOR<programariUpdateWithoutMedicInput, programariUncheckedUpdateWithoutMedicInput>
    create: XOR<programariCreateWithoutMedicInput, programariUncheckedCreateWithoutMedicInput>
  }

  export type programariUpdateWithWhereUniqueWithoutMedicInput = {
    where: programariWhereUniqueInput
    data: XOR<programariUpdateWithoutMedicInput, programariUncheckedUpdateWithoutMedicInput>
  }

  export type programariUpdateManyWithWhereWithoutMedicInput = {
    where: programariScalarWhereInput
    data: XOR<programariUpdateManyMutationInput, programariUncheckedUpdateManyWithoutMedicInput>
  }

  export type program_lucruUpsertWithWhereUniqueWithoutUsersInput = {
    where: program_lucruWhereUniqueInput
    update: XOR<program_lucruUpdateWithoutUsersInput, program_lucruUncheckedUpdateWithoutUsersInput>
    create: XOR<program_lucruCreateWithoutUsersInput, program_lucruUncheckedCreateWithoutUsersInput>
  }

  export type program_lucruUpdateWithWhereUniqueWithoutUsersInput = {
    where: program_lucruWhereUniqueInput
    data: XOR<program_lucruUpdateWithoutUsersInput, program_lucruUncheckedUpdateWithoutUsersInput>
  }

  export type program_lucruUpdateManyWithWhereWithoutUsersInput = {
    where: program_lucruScalarWhereInput
    data: XOR<program_lucruUpdateManyMutationInput, program_lucruUncheckedUpdateManyWithoutUsersInput>
  }

  export type program_lucruScalarWhereInput = {
    AND?: program_lucruScalarWhereInput | program_lucruScalarWhereInput[]
    OR?: program_lucruScalarWhereInput[]
    NOT?: program_lucruScalarWhereInput | program_lucruScalarWhereInput[]
    id?: UuidFilter<"program_lucru"> | string
    medic_id?: UuidFilter<"program_lucru"> | string
    zi_saptamana?: IntFilter<"program_lucru"> | number
    ora_inceput?: StringFilter<"program_lucru"> | string
    ora_sfarsit?: StringFilter<"program_lucru"> | string
    este_activ?: BoolFilter<"program_lucru"> | boolean
    created_at?: DateTimeNullableFilter<"program_lucru"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"program_lucru"> | Date | string | null
  }

  export type usersCreateWithoutProgramariInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    user_logs?: user_logsCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoCreateNestedOneWithoutUsersInput
    programari_medic?: programariCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProgramariInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    user_logs?: user_logsUncheckedCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoUncheckedCreateNestedOneWithoutUsersInput
    programari_medic?: programariUncheckedCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProgramariInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProgramariInput, usersUncheckedCreateWithoutProgramariInput>
  }

  export type usersCreateWithoutProgramari_medicInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    user_logs?: user_logsCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoCreateNestedOneWithoutUsersInput
    program_lucru?: program_lucruCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProgramari_medicInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    user_logs?: user_logsUncheckedCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoUncheckedCreateNestedOneWithoutUsersInput
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProgramari_medicInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProgramari_medicInput, usersUncheckedCreateWithoutProgramari_medicInput>
  }

  export type usersUpsertWithoutProgramariInput = {
    update: XOR<usersUpdateWithoutProgramariInput, usersUncheckedUpdateWithoutProgramariInput>
    create: XOR<usersCreateWithoutProgramariInput, usersUncheckedCreateWithoutProgramariInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProgramariInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProgramariInput, usersUncheckedUpdateWithoutProgramariInput>
  }

  export type usersUpdateWithoutProgramariInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProgramariInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUncheckedUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUncheckedUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUncheckedUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutProgramari_medicInput = {
    update: XOR<usersUpdateWithoutProgramari_medicInput, usersUncheckedUpdateWithoutProgramari_medicInput>
    create: XOR<usersCreateWithoutProgramari_medicInput, usersUncheckedCreateWithoutProgramari_medicInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProgramari_medicInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProgramari_medicInput, usersUncheckedUpdateWithoutProgramari_medicInput>
  }

  export type usersUpdateWithoutProgramari_medicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUpdateOneWithoutUsersNestedInput
    program_lucru?: program_lucruUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProgramari_medicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUncheckedUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUncheckedUpdateOneWithoutUsersNestedInput
    program_lucru?: program_lucruUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutMedic_infoInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    user_logs?: user_logsCreateNestedManyWithoutUsersInput
    programari_medic?: programariCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMedic_infoInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    user_logs?: user_logsUncheckedCreateNestedManyWithoutUsersInput
    programari_medic?: programariUncheckedCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMedic_infoInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMedic_infoInput, usersUncheckedCreateWithoutMedic_infoInput>
  }

  export type specialitatiCreateWithoutMedic_infoInput = {
    nume: string
    descriere?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type specialitatiUncheckedCreateWithoutMedic_infoInput = {
    id?: number
    nume: string
    descriere?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type specialitatiCreateOrConnectWithoutMedic_infoInput = {
    where: specialitatiWhereUniqueInput
    create: XOR<specialitatiCreateWithoutMedic_infoInput, specialitatiUncheckedCreateWithoutMedic_infoInput>
  }

  export type program_lucruCreateWithoutMedic_infoInput = {
    id?: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutProgram_lucruInput
  }

  export type program_lucruUncheckedCreateWithoutMedic_infoInput = {
    id?: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type program_lucruCreateOrConnectWithoutMedic_infoInput = {
    where: program_lucruWhereUniqueInput
    create: XOR<program_lucruCreateWithoutMedic_infoInput, program_lucruUncheckedCreateWithoutMedic_infoInput>
  }

  export type program_lucruCreateManyMedic_infoInputEnvelope = {
    data: program_lucruCreateManyMedic_infoInput | program_lucruCreateManyMedic_infoInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutMedic_infoInput = {
    update: XOR<usersUpdateWithoutMedic_infoInput, usersUncheckedUpdateWithoutMedic_infoInput>
    create: XOR<usersCreateWithoutMedic_infoInput, usersUncheckedCreateWithoutMedic_infoInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMedic_infoInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMedic_infoInput, usersUncheckedUpdateWithoutMedic_infoInput>
  }

  export type usersUpdateWithoutMedic_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUpdateManyWithoutUsersNestedInput
    programari_medic?: programariUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMedic_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUncheckedUpdateManyWithoutUsersNestedInput
    programari_medic?: programariUncheckedUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type specialitatiUpsertWithoutMedic_infoInput = {
    update: XOR<specialitatiUpdateWithoutMedic_infoInput, specialitatiUncheckedUpdateWithoutMedic_infoInput>
    create: XOR<specialitatiCreateWithoutMedic_infoInput, specialitatiUncheckedCreateWithoutMedic_infoInput>
    where?: specialitatiWhereInput
  }

  export type specialitatiUpdateToOneWithWhereWithoutMedic_infoInput = {
    where?: specialitatiWhereInput
    data: XOR<specialitatiUpdateWithoutMedic_infoInput, specialitatiUncheckedUpdateWithoutMedic_infoInput>
  }

  export type specialitatiUpdateWithoutMedic_infoInput = {
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type specialitatiUncheckedUpdateWithoutMedic_infoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type program_lucruUpsertWithWhereUniqueWithoutMedic_infoInput = {
    where: program_lucruWhereUniqueInput
    update: XOR<program_lucruUpdateWithoutMedic_infoInput, program_lucruUncheckedUpdateWithoutMedic_infoInput>
    create: XOR<program_lucruCreateWithoutMedic_infoInput, program_lucruUncheckedCreateWithoutMedic_infoInput>
  }

  export type program_lucruUpdateWithWhereUniqueWithoutMedic_infoInput = {
    where: program_lucruWhereUniqueInput
    data: XOR<program_lucruUpdateWithoutMedic_infoInput, program_lucruUncheckedUpdateWithoutMedic_infoInput>
  }

  export type program_lucruUpdateManyWithWhereWithoutMedic_infoInput = {
    where: program_lucruScalarWhereInput
    data: XOR<program_lucruUpdateManyMutationInput, program_lucruUncheckedUpdateManyWithoutMedic_infoInput>
  }

  export type medic_infoCreateWithoutSpecialitateInput = {
    id?: string
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutMedic_infoInput
    program_lucru?: program_lucruCreateNestedManyWithoutMedic_infoInput
  }

  export type medic_infoUncheckedCreateWithoutSpecialitateInput = {
    id?: string
    user_id: string
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutMedic_infoInput
  }

  export type medic_infoCreateOrConnectWithoutSpecialitateInput = {
    where: medic_infoWhereUniqueInput
    create: XOR<medic_infoCreateWithoutSpecialitateInput, medic_infoUncheckedCreateWithoutSpecialitateInput>
  }

  export type medic_infoCreateManySpecialitateInputEnvelope = {
    data: medic_infoCreateManySpecialitateInput | medic_infoCreateManySpecialitateInput[]
    skipDuplicates?: boolean
  }

  export type medic_infoUpsertWithWhereUniqueWithoutSpecialitateInput = {
    where: medic_infoWhereUniqueInput
    update: XOR<medic_infoUpdateWithoutSpecialitateInput, medic_infoUncheckedUpdateWithoutSpecialitateInput>
    create: XOR<medic_infoCreateWithoutSpecialitateInput, medic_infoUncheckedCreateWithoutSpecialitateInput>
  }

  export type medic_infoUpdateWithWhereUniqueWithoutSpecialitateInput = {
    where: medic_infoWhereUniqueInput
    data: XOR<medic_infoUpdateWithoutSpecialitateInput, medic_infoUncheckedUpdateWithoutSpecialitateInput>
  }

  export type medic_infoUpdateManyWithWhereWithoutSpecialitateInput = {
    where: medic_infoScalarWhereInput
    data: XOR<medic_infoUpdateManyMutationInput, medic_infoUncheckedUpdateManyWithoutSpecialitateInput>
  }

  export type medic_infoScalarWhereInput = {
    AND?: medic_infoScalarWhereInput | medic_infoScalarWhereInput[]
    OR?: medic_infoScalarWhereInput[]
    NOT?: medic_infoScalarWhereInput | medic_infoScalarWhereInput[]
    id?: UuidFilter<"medic_info"> | string
    user_id?: UuidFilter<"medic_info"> | string
    specialitate_id?: IntFilter<"medic_info"> | number
    titlu?: StringNullableFilter<"medic_info"> | string | null
    experienta_ani?: IntNullableFilter<"medic_info"> | number | null
    telefon?: StringNullableFilter<"medic_info"> | string | null
    cabinet?: StringNullableFilter<"medic_info"> | string | null
    pret_consultatie?: IntNullableFilter<"medic_info"> | number | null
    bio?: StringNullableFilter<"medic_info"> | string | null
    rating?: FloatNullableFilter<"medic_info"> | number | null
    created_at?: DateTimeNullableFilter<"medic_info"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"medic_info"> | Date | string | null
  }

  export type usersCreateWithoutProgram_lucruInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    user_logs?: user_logsCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoCreateNestedOneWithoutUsersInput
    programari_medic?: programariCreateNestedManyWithoutMedicInput
  }

  export type usersUncheckedCreateWithoutProgram_lucruInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    user_logs?: user_logsUncheckedCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoUncheckedCreateNestedOneWithoutUsersInput
    programari_medic?: programariUncheckedCreateNestedManyWithoutMedicInput
  }

  export type usersCreateOrConnectWithoutProgram_lucruInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProgram_lucruInput, usersUncheckedCreateWithoutProgram_lucruInput>
  }

  export type medic_infoCreateWithoutProgram_lucruInput = {
    id?: string
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutMedic_infoInput
    specialitate: specialitatiCreateNestedOneWithoutMedic_infoInput
  }

  export type medic_infoUncheckedCreateWithoutProgram_lucruInput = {
    id?: string
    user_id: string
    specialitate_id: number
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type medic_infoCreateOrConnectWithoutProgram_lucruInput = {
    where: medic_infoWhereUniqueInput
    create: XOR<medic_infoCreateWithoutProgram_lucruInput, medic_infoUncheckedCreateWithoutProgram_lucruInput>
  }

  export type usersUpsertWithoutProgram_lucruInput = {
    update: XOR<usersUpdateWithoutProgram_lucruInput, usersUncheckedUpdateWithoutProgram_lucruInput>
    create: XOR<usersCreateWithoutProgram_lucruInput, usersUncheckedCreateWithoutProgram_lucruInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProgram_lucruInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProgram_lucruInput, usersUncheckedUpdateWithoutProgram_lucruInput>
  }

  export type usersUpdateWithoutProgram_lucruInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUpdateManyWithoutMedicNestedInput
  }

  export type usersUncheckedUpdateWithoutProgram_lucruInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    user_logs?: user_logsUncheckedUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUncheckedUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUncheckedUpdateManyWithoutMedicNestedInput
  }

  export type medic_infoUpsertWithoutProgram_lucruInput = {
    update: XOR<medic_infoUpdateWithoutProgram_lucruInput, medic_infoUncheckedUpdateWithoutProgram_lucruInput>
    create: XOR<medic_infoCreateWithoutProgram_lucruInput, medic_infoUncheckedCreateWithoutProgram_lucruInput>
    where?: medic_infoWhereInput
  }

  export type medic_infoUpdateToOneWithWhereWithoutProgram_lucruInput = {
    where?: medic_infoWhereInput
    data: XOR<medic_infoUpdateWithoutProgram_lucruInput, medic_infoUncheckedUpdateWithoutProgram_lucruInput>
  }

  export type medic_infoUpdateWithoutProgram_lucruInput = {
    id?: StringFieldUpdateOperationsInput | string
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutMedic_infoNestedInput
    specialitate?: specialitatiUpdateOneRequiredWithoutMedic_infoNestedInput
  }

  export type medic_infoUncheckedUpdateWithoutProgram_lucruInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    specialitate_id?: IntFieldUpdateOperationsInput | number
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutUser_logsInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoCreateNestedOneWithoutUsersInput
    programari_medic?: programariCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_logsInput = {
    id?: string
    email: string
    username: string
    password_hash: string
    password_salt: string
    role?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    programari?: programariUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    medic_info?: medic_infoUncheckedCreateNestedOneWithoutUsersInput
    programari_medic?: programariUncheckedCreateNestedManyWithoutMedicInput
    program_lucru?: program_lucruUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_logsInput, usersUncheckedCreateWithoutUser_logsInput>
  }

  export type usersUpsertWithoutUser_logsInput = {
    update: XOR<usersUpdateWithoutUser_logsInput, usersUncheckedUpdateWithoutUser_logsInput>
    create: XOR<usersCreateWithoutUser_logsInput, usersUncheckedCreateWithoutUser_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_logsInput, usersUncheckedUpdateWithoutUser_logsInput>
  }

  export type usersUpdateWithoutUser_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programari?: programariUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    medic_info?: medic_infoUncheckedUpdateOneWithoutUsersNestedInput
    programari_medic?: programariUncheckedUpdateManyWithoutMedicNestedInput
    program_lucru?: program_lucruUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type programariCreateManyUsersInput = {
    id?: number
    medic_id: string
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type refresh_tokensCreateManyUsersInput = {
    token_id: string
    client_id: string
    scope?: string | null
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type sessionsCreateManyUsersInput = {
    id?: number
    session_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type user_logsCreateManyUsersInput = {
    id?: string
    action: string
    resource?: string | null
    ip_address?: string | null
    user_agent?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type programariCreateManyMedicInput = {
    id?: number
    user_id: string
    serviciu: string
    data_programare: Date | string
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type program_lucruCreateManyUsersInput = {
    id?: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type programariUpdateWithoutUsersInput = {
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medic?: usersUpdateOneRequiredWithoutProgramari_medicNestedInput
  }

  export type programariUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    medic_id?: StringFieldUpdateOperationsInput | string
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programariUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    medic_id?: StringFieldUpdateOperationsInput | string
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUpdateWithoutUsersInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUncheckedUpdateWithoutUsersInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUncheckedUpdateManyWithoutUsersInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsUpdateWithoutUsersInput = {
    session_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sessionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_logsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_logsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type programariUpdateWithoutMedicInput = {
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutProgramariNestedInput
  }

  export type programariUncheckedUpdateWithoutMedicInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programariUncheckedUpdateManyWithoutMedicInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    serviciu?: StringFieldUpdateOperationsInput | string
    data_programare?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type program_lucruUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medic_info?: medic_infoUpdateOneRequiredWithoutProgram_lucruNestedInput
  }

  export type program_lucruUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type program_lucruUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type program_lucruCreateManyMedic_infoInput = {
    id?: string
    zi_saptamana: number
    ora_inceput: string
    ora_sfarsit: string
    este_activ?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type program_lucruUpdateWithoutMedic_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutProgram_lucruNestedInput
  }

  export type program_lucruUncheckedUpdateWithoutMedic_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type program_lucruUncheckedUpdateManyWithoutMedic_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    zi_saptamana?: IntFieldUpdateOperationsInput | number
    ora_inceput?: StringFieldUpdateOperationsInput | string
    ora_sfarsit?: StringFieldUpdateOperationsInput | string
    este_activ?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type medic_infoCreateManySpecialitateInput = {
    id?: string
    user_id: string
    titlu?: string | null
    experienta_ani?: number | null
    telefon?: string | null
    cabinet?: string | null
    pret_consultatie?: number | null
    bio?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type medic_infoUpdateWithoutSpecialitateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutMedic_infoNestedInput
    program_lucru?: program_lucruUpdateManyWithoutMedic_infoNestedInput
  }

  export type medic_infoUncheckedUpdateWithoutSpecialitateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    program_lucru?: program_lucruUncheckedUpdateManyWithoutMedic_infoNestedInput
  }

  export type medic_infoUncheckedUpdateManyWithoutSpecialitateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    titlu?: NullableStringFieldUpdateOperationsInput | string | null
    experienta_ani?: NullableIntFieldUpdateOperationsInput | number | null
    telefon?: NullableStringFieldUpdateOperationsInput | string | null
    cabinet?: NullableStringFieldUpdateOperationsInput | string | null
    pret_consultatie?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Medic_infoCountOutputTypeDefaultArgs instead
     */
    export type Medic_infoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Medic_infoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialitatiCountOutputTypeDefaultArgs instead
     */
    export type SpecialitatiCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecialitatiCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use auth_keysDefaultArgs instead
     */
    export type auth_keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = auth_keysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use oauth_clientsDefaultArgs instead
     */
    export type oauth_clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = oauth_clientsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use oauth_usersDefaultArgs instead
     */
    export type oauth_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = oauth_usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use refresh_tokensDefaultArgs instead
     */
    export type refresh_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = refresh_tokensDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sessionsDefaultArgs instead
     */
    export type sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sessionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use programariDefaultArgs instead
     */
    export type programariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = programariDefaultArgs<ExtArgs>
    /**
     * @deprecated Use medic_infoDefaultArgs instead
     */
    export type medic_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = medic_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use specialitatiDefaultArgs instead
     */
    export type specialitatiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = specialitatiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use program_lucruDefaultArgs instead
     */
    export type program_lucruArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = program_lucruDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_logsDefaultArgs instead
     */
    export type user_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_logsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}