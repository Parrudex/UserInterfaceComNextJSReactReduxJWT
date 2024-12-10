// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import SvgIconStyle from "../../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: getIcon("ic_blog"),
  cart: getIcon("ic_cart"),
  chat: getIcon("ic_chat"),
  mail: getIcon("ic_mail"),
  user: getIcon("ic_user"),
  kanban: getIcon("ic_kanban"),
  banking: getIcon("ic_banking"),
  booking: getIcon("ic_booking"),
  invoice: getIcon("ic_invoice"),
  calendar: getIcon("ic_calendar"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  menuItem: getIcon("ic_menu_item"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "Acesso rapido",
    items: [
      {
        title: "Inicio",
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
      },
      {
        title:'Licenças',
        path: PATH_DASHBOARD.alvaras.list,
        icon: ICONS.booking,
      },
      {
        title:'Contratos',
        path: PATH_DASHBOARD.contract.list,
        icon: ICONS.mail,
       },
      {
        title:'Bombeiros',
        path: PATH_DASHBOARD.firemen.list,
        icon: ICONS.booking,
      },
      {
        title: "Relatório Gerencial",
        path: PATH_DASHBOARD.reports.root,
        icon: ICONS.menuItem,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: "Gerencimamento",
    items: [
      {
        title:'Licenças',
        path: '#',
        icon: ICONS.booking,
        children: [
          {title: 'Listar', path: PATH_DASHBOARD.alvaras.list, entityName:'permit'  },
          {title: 'Listar Status', path:PATH_DASHBOARD.permitStatus.list, entityName:'permitStatus'},
          {title: 'Listar Tipos de Tarefas', path: PATH_DASHBOARD.permitType.list, entityName:'permitType'}
        ]
      },
      {
        title:'Contratos',
        path: PATH_DASHBOARD.permitStatus.list,
        icon: ICONS.mail,
        children: [
          {title: 'Listar', path: PATH_DASHBOARD.contract.list, entityName: 'contract'},
          {title: 'Listar Tipos', path: PATH_DASHBOARD.contractType.list},
          {title: 'Listar Status', path: PATH_DASHBOARD.contractStatus.list},

        ]
      },
      {
        title:'Bombeiros',
        path: '#',
        icon: ICONS.booking,
        children: [
          {title: 'Listar', path: PATH_DASHBOARD.firemen.list, entityName: 'firemen'},
          {title: 'Listar Tipos', path: PATH_DASHBOARD.firemenType.list},
          {title: 'Listar Status', path: PATH_DASHBOARD.firemenStatus.list},

        ]
      },
      {
        title:'Cadastros',
        path: '#',
        icon: ICONS.menuItem,
        children: [
          {
            title: "Empresas",
            path: PATH_DASHBOARD.empresa.list,
            entityName: 'company',
          },
          {
            title: "Competências",
            path: PATH_DASHBOARD.competence.list,
            entityName: 'competence',
          },
          {
            title: "Regional",
            path: PATH_DASHBOARD.regional.list,
            entityName: 'company',
          }
        ]
      },
      {
        title: "Seguranca",
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: "Auditoria", path: PATH_DASHBOARD.security.audit, entityName:'audit'},
          { title: "Grupos de acesso",path: PATH_DASHBOARD.accessGroup.list, entityName:'accessGroup' },
          { title: "Usuários",path: PATH_DASHBOARD.user.list, entityName:'user' }
        ],
      },
      // {
      //   title: "Relatorios",
      //   path: PATH_DASHBOARD.blog.root,
      //   icon: ICONS.menuItem,
      //   children: [
      //     {
      //       title: "R1 - Gerencial",
      //       path: "",
      //     },
      //     {
      //       title: "R2 - Executivo",
      //       path: "",
      //     },
      //   ],
      // },
      {
        title: "Clientes",
        path: PATH_DASHBOARD.customer.list,
        icon: ICONS.user,
        entityName: 'customer',
      },
    ],
  },
  {
    subheader: "Automação",
    items:[
      {
        title: "MGT Licenças",
        path: '#',
        icon: ICONS.analytics,
        children: [
          {
            title: "Por Status",
            path: PATH_DASHBOARD.permitStatusMGTRule.list,
            entityName: 'permitStatusMGTRule',
          },
        ]
      },
    ]
  }
];

export default navConfig;
