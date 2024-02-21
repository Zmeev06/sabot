export interface ICluster {
  children_count: number
children_trashed_count: number
color: string
core_id: number
created_at: string
deleted_at: null
id: number
keywords_count: number
keywords_trashed_count: number
name: string
parent_id: null
updated_at: string
}

export interface INode {
  key: number,
  label: string,
  children: INode[],
  loading: boolean,
  leaf: boolean
}