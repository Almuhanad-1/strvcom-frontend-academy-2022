import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'

export const SingIn = () => (
  <Link href={Routes.LOGIN}>
    Already have an account? <b>sign in</b>
  </Link>
)
