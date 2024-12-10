// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  verify: path(ROOTS_AUTH, "/verify"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  components: "/components",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "/app"),
    ecommerce: path(ROOTS_DASHBOARD, "/ecommerce"),
    analytics: path(ROOTS_DASHBOARD, "/analytics"),
    banking: path(ROOTS_DASHBOARD, "/banking"),
    booking: path(ROOTS_DASHBOARD, "/booking"),
  },
  mail: {
    root: path(ROOTS_DASHBOARD, "/mail"),
    all: path(ROOTS_DASHBOARD, "/mail/all"),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, "/chat"),
    new: path(ROOTS_DASHBOARD, "/chat/new"),
    view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  calendar: path(ROOTS_DASHBOARD, "/calendar"),
  kanban: path(ROOTS_DASHBOARD, "/kanban"),
  permissionDenied: path(ROOTS_DASHBOARD, "/permission-denied"),
  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    new: path(ROOTS_DASHBOARD, "/user/new"),
    list: path(ROOTS_DASHBOARD, "/user/list"),
    cards: path(ROOTS_DASHBOARD, "/user/cards"),
    profile: path(ROOTS_DASHBOARD, "/user/profile"),
    account: path(ROOTS_DASHBOARD, "/user/account"),
    edit: (id) => path(ROOTS_DASHBOARD, `/user/${id}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, "/e-commerce"),
    shop: path(ROOTS_DASHBOARD, "/e-commerce/shop"),
    list: path(ROOTS_DASHBOARD, "/e-commerce/list"),
    checkout: path(ROOTS_DASHBOARD, "/e-commerce/checkout"),
    new: path(ROOTS_DASHBOARD, "/e-commerce/product/new"),
    view: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
    edit: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(
      ROOTS_DASHBOARD,
      "/e-commerce/product/nike-blazer-low-77-vintage/edit"
    ),
    demoView: path(
      ROOTS_DASHBOARD,
      "/e-commerce/product/nike-air-force-1-ndestrukt"
    ),
  },
  alvaras: {
    root: path(ROOTS_DASHBOARD, "/alvaras"),
    list: path(ROOTS_DASHBOARD, "/alvaras/list"),
    new: path(ROOTS_DASHBOARD, "/alvaras/new"),
    view: (id) => path(ROOTS_DASHBOARD, `/alvaras/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/alvaras/${id}/edit`),
    demoEdit: path(
      ROOTS_DASHBOARD,
      "/alvaras/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit"
    ),
    demoView: path(
      ROOTS_DASHBOARD,
      "/alvaras/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5"
    ),
  },
  empresa: {
    root: path(ROOTS_DASHBOARD, "/empresas"),
    new: path(ROOTS_DASHBOARD, "/empresas/new"),
    list: path(ROOTS_DASHBOARD, "/empresas/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/empresas/${id}/edit`),
    demoView: path(
      ROOTS_DASHBOARD,
      "/alvaras/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5"
    ),
  },
  competence: {
    root: path(ROOTS_DASHBOARD, "/competence"),
    new: path(ROOTS_DASHBOARD, "/competence/new"),
    list: path(ROOTS_DASHBOARD, "/competence/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/competence/${id}/edit`)

  },
  customer: {
    root: path(ROOTS_DASHBOARD, "/customer"),
    new: path(ROOTS_DASHBOARD, "/customer/new"),
    list: path(ROOTS_DASHBOARD, "/customer/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/customer/${id}/edit`)

  },
   accessGroup: {
    root: path(ROOTS_DASHBOARD, "/access-group/list"),
    new: path(ROOTS_DASHBOARD, "/access-group/new"),
    list: path(ROOTS_DASHBOARD, "/access-group/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/access-group/${id}/edit`),
  },
  permitType: {
    root: path(ROOTS_DASHBOARD, "/permit-type"),
    new: path(ROOTS_DASHBOARD, "/permit-type/new"),
    list: path(ROOTS_DASHBOARD, "/permit-type/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/permit-type/${id}/edit`)
  },
  permitStatus: {
    root: path(ROOTS_DASHBOARD, "/permit-status"),
    new: path(ROOTS_DASHBOARD, "/permit-status/new"),
    list: path(ROOTS_DASHBOARD, "/permit-status/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/permit-status/${id}/edit`)
  },

  permitStatusMGTRule: {
    root: path(ROOTS_DASHBOARD, "/permit-status-mgt-rule/list"),
    new: path(ROOTS_DASHBOARD, "/permit-status-mgt-rule/new"),
    list: path(ROOTS_DASHBOARD, "/permit-status-mgt-rule/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/permit-status-mgt-rule/${id}/edit`)
  },

  contractType: {
    root: path(ROOTS_DASHBOARD, "/contract-type"),
    new: path(ROOTS_DASHBOARD, "/contract-type/new"),
    list: path(ROOTS_DASHBOARD, "/contract-type/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/contract-type/${id}/edit`)
  },
  contractStatus: {
    root: path(ROOTS_DASHBOARD, "/contract-status"),
    new: path(ROOTS_DASHBOARD, "/contract-status/new"),
    list: path(ROOTS_DASHBOARD, "/contract-status/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/contract-status/${id}/edit`)
  },

  invoice: {
    root: path(ROOTS_DASHBOARD, "/invoice"),
    list: path(ROOTS_DASHBOARD, "/invoice/list"),
    new: path(ROOTS_DASHBOARD, "/invoice/new"),
    view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(
      ROOTS_DASHBOARD,
      "/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit"
    ),
    demoView: path(
      ROOTS_DASHBOARD,
      "/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5"
    ),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, "/blog"),
    posts: path(ROOTS_DASHBOARD, "/blog/posts"),
    new: path(ROOTS_DASHBOARD, "/blog/new"),
    view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(
      ROOTS_DASHBOARD,
      "/blog/post/apply-these-7-secret-techniques-to-improve-event"
    ),
  },
  security: {
    audit: path(ROOTS_DASHBOARD, "/security/audit"),
  },
  contract: {
    list: path(ROOTS_DASHBOARD, "/contract/list"),
    new: path(ROOTS_DASHBOARD, "/contract/new"),
    edit: (id) => path(ROOTS_DASHBOARD, `/contract/${id}/edit`),
  },
  firemen: {
    list: path(ROOTS_DASHBOARD, "/firemen/list"),
    new: path(ROOTS_DASHBOARD, "/firemen/new"),
    edit: (id) => path(ROOTS_DASHBOARD, `/firemen/${id}/edit`),
  },
  firemenType: {
    root: path(ROOTS_DASHBOARD, "/firemen-type"),
    new: path(ROOTS_DASHBOARD, "/firemen-type/new"),
    list: path(ROOTS_DASHBOARD, "/firemen-type/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/firemen-type/${id}/edit`)
  },
  firemenStatus: {
    root: path(ROOTS_DASHBOARD, "/firemen-status"),
    new: path(ROOTS_DASHBOARD, "/firemen-status/new"),
    list: path(ROOTS_DASHBOARD, "/firemen-status/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/firemen-status/${id}/edit`)
  },

  regional: {
    root: path(ROOTS_DASHBOARD, "/regional"),
    new: path(ROOTS_DASHBOARD, "/regional/new"),
    list: path(ROOTS_DASHBOARD, "/regional/list"),
    edit: (id) => path(ROOTS_DASHBOARD, `/regional/${id}/edit`)
  },

  reports: {
    root: path(ROOTS_DASHBOARD, "/reports")
  }
};

export const PATH_DOCS = "https://docs-minimals.vercel.app/introduction";
