/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ActorFilter: { // input type
    every?: NexusGenInputs['ActorWhereInput'] | null; // ActorWhereInput
    none?: NexusGenInputs['ActorWhereInput'] | null; // ActorWhereInput
    some?: NexusGenInputs['ActorWhereInput'] | null; // ActorWhereInput
  }
  ActorWhereInput: { // input type
    AND?: NexusGenInputs['ActorWhereInput'][] | null; // [ActorWhereInput!]
    character?: NexusGenInputs['CharacterWhereInput'] | null; // CharacterWhereInput
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ActorWhereInput'][] | null; // [ActorWhereInput!]
    OR?: NexusGenInputs['ActorWhereInput'][] | null; // [ActorWhereInput!]
    serie?: NexusGenInputs['SerieWhereInput'] | null; // SerieWhereInput
    serieId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  ActorWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  CharacterWhereInput: { // input type
    actor?: NexusGenInputs['ActorWhereInput'] | null; // ActorWhereInput
    actorId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    AND?: NexusGenInputs['CharacterWhereInput'][] | null; // [CharacterWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['CharacterWhereInput'][] | null; // [CharacterWhereInput!]
    OR?: NexusGenInputs['CharacterWhereInput'][] | null; // [CharacterWhereInput!]
  }
  DateTimeFilter: { // input type
    equals?: any | null; // DateTime
    gt?: any | null; // DateTime
    gte?: any | null; // DateTime
    in?: any[] | null; // [DateTime!]
    lt?: any | null; // DateTime
    lte?: any | null; // DateTime
    not?: any | null; // DateTime
    notIn?: any[] | null; // [DateTime!]
  }
  EpisodeFilter: { // input type
    every?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    none?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    some?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
  }
  EpisodeWhereInput: { // input type
    AND?: NexusGenInputs['EpisodeWhereInput'][] | null; // [EpisodeWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    NOT?: NexusGenInputs['EpisodeWhereInput'][] | null; // [EpisodeWhereInput!]
    OR?: NexusGenInputs['EpisodeWhereInput'][] | null; // [EpisodeWhereInput!]
    season?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    seasonId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  EpisodeWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ImageWhereInput: { // input type
    actor?: NexusGenInputs['ActorWhereInput'] | null; // ActorWhereInput
    actorId?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    AND?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    character?: NexusGenInputs['CharacterWhereInput'] | null; // CharacterWhereInput
    characterId?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    episode?: NexusGenInputs['EpisodeWhereInput'] | null; // EpisodeWhereInput
    episodeId?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    medium?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    OR?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    original?: NexusGenInputs['StringFilter'] | null; // StringFilter
    serie?: NexusGenInputs['SerieWhereInput'] | null; // SerieWhereInput
    serieId?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  SeasonFilter: { // input type
    every?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    none?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
    some?: NexusGenInputs['SeasonWhereInput'] | null; // SeasonWhereInput
  }
  SeasonWhereInput: { // input type
    AND?: NexusGenInputs['SeasonWhereInput'][] | null; // [SeasonWhereInput!]
    episodes?: NexusGenInputs['EpisodeFilter'] | null; // EpisodeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['SeasonWhereInput'][] | null; // [SeasonWhereInput!]
    OR?: NexusGenInputs['SeasonWhereInput'][] | null; // [SeasonWhereInput!]
    seasonNumber?: NexusGenInputs['IntFilter'] | null; // IntFilter
    serie?: NexusGenInputs['SerieWhereInput'] | null; // SerieWhereInput
    serieId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  SeasonWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  SerieOrderByInput: { // input type
    createdAt?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    language?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    title?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    updatedAt?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  SerieWhereInput: { // input type
    actors?: NexusGenInputs['ActorFilter'] | null; // ActorFilter
    AND?: NexusGenInputs['SerieWhereInput'][] | null; // [SerieWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    language?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['SerieWhereInput'][] | null; // [SerieWhereInput!]
    OR?: NexusGenInputs['SerieWhereInput'][] | null; // [SerieWhereInput!]
    seasons?: NexusGenInputs['SeasonFilter'] | null; // SeasonFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  SerieWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
}

export interface NexusGenEnums {
  OrderByArg: "asc" | "desc"
}

export interface NexusGenRootTypes {
  Actor: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Character: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Episode: { // root type
    id: number; // Int!
    title: string; // String!
  }
  Image: { // root type
    medium: string; // String!
    original: string; // String!
  }
  Query: {};
  Season: { // root type
    id: number; // Int!
    seasonNumber: number; // Int!
  }
  Serie: { // root type
    id: number; // Int!
    language: string; // String!
    title: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  ActorFilter: NexusGenInputs['ActorFilter'];
  ActorWhereInput: NexusGenInputs['ActorWhereInput'];
  ActorWhereUniqueInput: NexusGenInputs['ActorWhereUniqueInput'];
  CharacterWhereInput: NexusGenInputs['CharacterWhereInput'];
  DateTimeFilter: NexusGenInputs['DateTimeFilter'];
  EpisodeFilter: NexusGenInputs['EpisodeFilter'];
  EpisodeWhereInput: NexusGenInputs['EpisodeWhereInput'];
  EpisodeWhereUniqueInput: NexusGenInputs['EpisodeWhereUniqueInput'];
  ImageWhereInput: NexusGenInputs['ImageWhereInput'];
  IntFilter: NexusGenInputs['IntFilter'];
  NullableIntFilter: NexusGenInputs['NullableIntFilter'];
  SeasonFilter: NexusGenInputs['SeasonFilter'];
  SeasonWhereInput: NexusGenInputs['SeasonWhereInput'];
  SeasonWhereUniqueInput: NexusGenInputs['SeasonWhereUniqueInput'];
  SerieOrderByInput: NexusGenInputs['SerieOrderByInput'];
  SerieWhereInput: NexusGenInputs['SerieWhereInput'];
  SerieWhereUniqueInput: NexusGenInputs['SerieWhereUniqueInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  OrderByArg: NexusGenEnums['OrderByArg'];
}

export interface NexusGenFieldTypes {
  Actor: { // field return type
    character: NexusGenRootTypes['Character']; // Character!
    id: number; // Int!
    image: NexusGenRootTypes['Image']; // Image!
    name: string; // String!
  }
  Character: { // field return type
    id: number; // Int!
    image: NexusGenRootTypes['Image']; // Image!
    name: string; // String!
  }
  Episode: { // field return type
    id: number; // Int!
    image: NexusGenRootTypes['Image']; // Image!
    title: string; // String!
  }
  Image: { // field return type
    medium: string; // String!
    original: string; // String!
  }
  Query: { // field return type
    serie: NexusGenRootTypes['Serie'] | null; // Serie
    series: NexusGenRootTypes['Serie'][]; // [Serie!]!
  }
  Season: { // field return type
    episodes: NexusGenRootTypes['Episode'][]; // [Episode!]!
    id: number; // Int!
    seasonNumber: number; // Int!
  }
  Serie: { // field return type
    actors: NexusGenRootTypes['Actor'][]; // [Actor!]!
    id: number; // Int!
    image: NexusGenRootTypes['Image']; // Image!
    language: string; // String!
    seasons: NexusGenRootTypes['Season'][]; // [Season!]!
    title: string; // String!
  }
}

export interface NexusGenArgTypes {
  Query: {
    serie: { // args
      where: NexusGenInputs['SerieWhereUniqueInput']; // SerieWhereUniqueInput!
    }
    series: { // args
      after?: NexusGenInputs['SerieWhereUniqueInput'] | null; // SerieWhereUniqueInput
      before?: NexusGenInputs['SerieWhereUniqueInput'] | null; // SerieWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['SerieOrderByInput'] | null; // SerieOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['SerieWhereInput'] | null; // SerieWhereInput
    }
  }
  Season: {
    episodes: { // args
      after?: NexusGenInputs['EpisodeWhereUniqueInput'] | null; // EpisodeWhereUniqueInput
      before?: NexusGenInputs['EpisodeWhereUniqueInput'] | null; // EpisodeWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Serie: {
    actors: { // args
      after?: NexusGenInputs['ActorWhereUniqueInput'] | null; // ActorWhereUniqueInput
      before?: NexusGenInputs['ActorWhereUniqueInput'] | null; // ActorWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    seasons: { // args
      after?: NexusGenInputs['SeasonWhereUniqueInput'] | null; // SeasonWhereUniqueInput
      before?: NexusGenInputs['SeasonWhereUniqueInput'] | null; // SeasonWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Actor" | "Character" | "Episode" | "Image" | "Query" | "Season" | "Serie";

export type NexusGenInputNames = "ActorFilter" | "ActorWhereInput" | "ActorWhereUniqueInput" | "CharacterWhereInput" | "DateTimeFilter" | "EpisodeFilter" | "EpisodeWhereInput" | "EpisodeWhereUniqueInput" | "ImageWhereInput" | "IntFilter" | "NullableIntFilter" | "SeasonFilter" | "SeasonWhereInput" | "SeasonWhereUniqueInput" | "SerieOrderByInput" | "SerieWhereInput" | "SerieWhereUniqueInput" | "StringFilter";

export type NexusGenEnumNames = "OrderByArg";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}