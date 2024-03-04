// store/index.d.ts

import { Store } from '@reduxjs/toolkit';
import { RootState } from './reducers'; // Adjust the path based on your actual file structure

declare const store: Store<RootState>;

export default store;