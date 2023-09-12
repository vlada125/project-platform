export type IFile = {
  id?: number;
  name?: string;
  type?: string;
  extension?: string;
  size?: number;
  owner?: string;
  location?: string;
  createdAt?: string;
  path?: string;
};

export type IFolder = {
  id?: number;
  name?: string;
  lastModifiedAt?: string;
};
