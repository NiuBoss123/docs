import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'MisakaAkio Docs',
    },
    links: [
      {
        text: '个人主页',
        url: 'https://www.akio.top',
        active: 'nested-url',
      },
    ],
    githubUrl: 'https://github.com/NiuBoss123/docs',
  };
}
