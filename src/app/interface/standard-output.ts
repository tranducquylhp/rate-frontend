import {Module} from './module';


export interface StandardOutput {
  id?: number;
  name: string;
  rate?: string;
  module: Module;
}
