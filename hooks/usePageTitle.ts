'use client';

import { useEffect } from 'react';

const SITE_NAME = 'House of Elle';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Luxury fragrances for everyone`;
  }, [title]);
}
