import { HomePage } from '@/pages/HomePage/HomePage';
import { ThemeParamsPage } from '@/pages/ThemeParamsPage';
import { LaunchParamsPage } from '@/pages/LaunchParamsPage';
import { InitDataPage } from '@/pages/InitDataPage/InitDataPage';
import { TonConnectPage } from '@/pages/TonConnectPage/TonConnectPage';
import type { AppContext } from '@/context/types';

export interface RoutePage {
  render(root: HTMLElement): void;
  init?(): void;
  destroy?(): void;
}

export const routes: {
  pathname: string;
  Page: {
    new(context: AppContext): RoutePage;
  };
  title?: string;
  icon?: string;
}[] = [
  { pathname: '/', Page: HomePage },
  { pathname: '/init-data', Page: InitDataPage, title: 'Init Data' }
];
