// ----------------------------------------------------------------------

// IF THIS TRANSLATION IS INCORRECT PLEASE IGNORE THIS AS THIS TRANSLATION IS FOR DEMO PURPOSES ONLY
// We are happy if you can help improve the translation by sending an email to support@minimals.cc.

// ----------------------------------------------------------------------

const pt_br = {
  app: `Web Permits`,
  cnpj: `cnpj`,
  name: `nome`,
  names: `nomes`,
  user: `usuário`,
  list: `lista`,
  edit: `editar`,
  paid: `regular`,
  unpaid: `dispensada e renovado`,
  overdue: `vencido`,
  draft: `em renovação`,
  paid: `regular`,
  delete: `deletar`,
  new: `novo`,
  region: `região`,
  number: `number`,
  expireDate: `data de vencimento`,
  expiration: `vencimento`,
  status: `status`,
  type: `tipo`,
  uf: `uf`,
  add: `adicionar`,
  localization: `localização`,
  invalidDate: 'Data inválida',
  type: `tipo`,
  status: `status`,
  INTERNAL: `INTERNO`,
  EXTERNAL: `EXTERNO`,
  PROVIDER: `provedor`,
  chooseFile: `Escolher arquivo`,
  addSuccess: `Adicionado com sucesso`,
  yes: `sim`,
  no: `não`,
  createdAt: `Data de criação`,
  active: `ativo`,
  inative: `inativo`,
  actives: `ativos`,
  inatives: `inativos`,
  select: `selecionar`,
  update: `atualizar`,
  delete: `deletar`,
  admin: `administrador`,
  description: `descrição`,
  status_active: `status ativo?`,
  view: `Visualizar`,
  show_audit: `Comentários`,
  action: `Ação`,
  logged_user: `Usuário logado`,
  date: `Data`,
  log: `Log`,
  module:{
    firemen:'Módulo Bombeiros',
    contract: 'Módulo Contratos'
  },
  PERMIT: `Licença`,
  PERMITSTATUS: `Status de Licença`,
  PERMITTYPE: `Tipo de Tarefa`,
  CONTRACT: `Contrato`,
  CONTRACTTYPE: `Tipo de contrato`,
  CONTRACTSTATUS: `Status de contrato`,
  CONTRACTATTACHMENT: `Anexo de contrato`,
  ACCESSGROUP: `Grupo de acesso`,
  COMPANY: `Empresa`,
  COMPANYATTACHMENT: `Anexo de empresa`,
  ATTACHMENT: `Anexo`,
  GROUP: `Grupo`,
  USER: `Usuário`,
  COMPETENCE: `Competência`,
  CUSTOMER: `Cliente`,
  FIREMEN: `Bombeiro`,
  FIREMENTYPE: `Tipo de bombeiro`,
  FIREMENSTATUS: `Status de bombeiro`,
  EXCLUDEDENTITY: `Entidade Excluída`,
  INATIVEENTITY: `Entidade Inativada`,
  REGIONAL: 'Regional',
  USERXTEMPCUSTOMER: `Cliente temporario`,
  FIREMENATTACHMENT: `Anexo de Bombeiros`,
  PERMITSTATUSMGTRULE: `MGT da Licença por Status`,
  CREATOIN: `Criação`,
  AMENDMENT: `Alteração`,
  VISUALIZATION: `Visualização`,
  EXCLUSION: `Exclusão`,
  INATIVE: `Inativar`,
  OTHER: 'Outra',
  AMENDMENT_BACKGROUND_SERVER: `Alteração em Segundo plano`,
  ACTION_BACKGROUND_SERVER: `Ação em Segundo plano`,
  DEAD_LINE_DATE: 'Data de Renovação',
  EXPIRATION_DATE: 'Data de Expiração',
  ISSUE_DATE: 'Data de Emissão',
  PERMIT_STATUS: 'Nome do Status',
  CURRENT_DATE: 'Data Atual',
  BIGGER_THEN: 'Maior que',
  BIGGER_OR_EQUALS: 'Maior ou igual a',
  LESS_OR_EQUALS: 'Menor ou igual a',
  LESS_THEN: 'Menor que',
  EQUALS: 'Igual a',
  hide_audit: `Ocultar auditoria`,
  hide_comments: `Ocultar comentários`,
  show_comments: `Mostrar comentários`,
  changeTo:'Mudar para',
  permit: {
    page_list: `Licenças: Lista de Licenças`,
    page_edit: `Licenças: Editar Licença`,
    page_new: `Licenças: Criar Licenças`,
    list: `Lista de Licenças`,
    new: `Criar novo Licença`,
    edit: `Editar Licença`,
    page_name: `Licença`,
    page_names: `Licenças`,
    name: `Licença`,
    excluded: `Licença excluído`,
    excludedAll: `Licenças exlcuídos`,
    audit: {
      eventLog_updated: 'Log atualizado!',
      eventLog_excluded: 'Log excluido!',
      form: {
        require: {
          message: 'Log é obrigatório',
        },
        fields: {
          message: 'Log',
        },
      },
    },
    form: {
      require: {
        company: 'Empresa é obrigatório',
        type: 'Tipo é obrigatório',
        status: 'Status é obrigatório',
        number: 'Número da Licença é obrigatório',
        responsable: 'Responsável é obrigatório',
        expirationDate: 'Data de validade é obrigatório',
        issueDate: 'Data de Emissão é obrigatório',
        deadLineDate: 'Data de renovação é obrigatório',
      },
      fields: {
        company: 'Empresa',
        type: 'Tipo',
        status: 'Status',
        number: 'Número da Licença',
        responsable: 'Responsável pela licença',
        comments: 'Observação',
        hasExpiration: 'Prazo Indeterminado?',
        issueDate: 'Data de Emissão',
        deadLineDate: 'Data de renovação',
        expirationDate: 'Data de validade',
      },
    },
    empty: 'Nenhuma licença cadastrada até o momento.',
  },
  company: {
    page_list: 'Empresa: Lista de Empresas',
    list: 'Lista de empresas',
    page_name: 'Empresa',
    page_names: 'Empresas',
    name: 'Empresa',
    excluded: 'Empresa excluída',
    excludedAll: 'Empresas exlcuídas',
    inative: 'Empresa inativa',
    inativeAll: 'Empresas inativas',
    error: {
      inative: 'Empresa não está ativa!',
    },
    form: {
      require: {
        name: 'Nome',
      },
      fields: {
        uf: 'UF',
        regional: 'Regional',
        localization: 'Localização',
        name: 'Nome',
        competence: 'Competência',
      },
      error: {
        upload: 'Erro ao fazer upload.',
      },
    },
  },
  user: {
    page_list: 'Usuário: Lista de Usuários',
    page_name: 'Usuário',
    page_names: 'Usuários',
    name: 'Usuário',
    excluded: 'Usuário excluído',
    excludedAll: 'Usuários exlcuídos',
  },
  attachments: {
    name: 'Anexo',
    names: 'Anexos',
    excluded: 'Anexo excluído',
    excludedAll: 'Anexos exlcuídos',
    form: {
      require: {
        description: 'Descrição é obrigatório',
        issuedDate: 'Data de registro é obrigatório',
        file: 'Arquivo é obrigatório',
        fileAndUrlFile: 'O Arquivo ou Link para o arquivo é obrigatório',
      },
      fields: {
        description: 'Descrição',
        urlFile: 'Link para o arquivo',
        file: 'Arquivo',
        issuedDate: 'Data de emissão',
        expirationDate: 'Data de validade'
      },
      error: {
        upload: 'Erro ao fazer upload.',
      },
    },
  },
  inative: {
    name: 'Inativo',
    names: 'Inativos',
    form: {
      require: {
        justification: 'Justificativa é obrigatório',
        requestEmail: 'Email do solicitante é obrigatório',
        requestName: 'Nome do solicitante é obrigatório',
        description: 'Descrição é obrigatório',
      },
      fields: {
        description: 'Descrição',
        justification: 'Justificativa',
        requestEmail: 'Email do solicitante',
        requestName: 'Nome do solicitante',
      },
      validate: {
        requestEmail: 'Email do solicitante é inválido',
      },
    },
  },
  excluded: {
    name: 'Excluído',
    names: 'Excluídos',
    form: {
      require: {
        requestEmail: 'Email do solicitante é obrigatório',
        requestName: 'Nome do solicitante é obrigatório',
      },
      fields: {
        requestEmail: 'Email do solicitante',
        requestName: 'Nome do solicitante',
      },
      validate: {
        requestEmail: 'Email do solicitante é inválido',
      },
    },
  },
  accessGroup: {
    page_list: 'Grupo de Acesso: Listar Grupos de Acesso',
    page_edit: 'Grupo de Acesso: Editar Grupo de Acesso',
    page_new: 'Grupo de Acesso: Criar Grupo de Acesso',
    list: 'Lista de Grupos de Acesso',
    new: 'Criar novo Grupo de Acesso',
    edit: 'Editar Grupo de Acesso',
    name: 'Grupo de acesso',
    names: 'Grupos de acesso',
    excluded: 'Grupo de Acesso excluído',
    excludedAll: 'Grupos de Acesso excluído',
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        roles: 'Papéis',
        active: 'Ativo',
      },
    },
  },
  audit: {
    name: 'Auditoria',
    names: 'Auditorias',
  },
  report: {
    name: 'Relatório',
    names: 'Relatórios',
  },
  contract: {
    page_list: 'Contratos: Lista de Contratos',
    page_edit: 'Contratos: Editar Contrato',
    page_new: 'Contratos: Criar Contrato',
    list: 'Lista de Contratos',
    new: 'Criar novo Contrato',
    edit: 'Editar Contrato',
    page_name: 'Contrato',
    page_names: 'Contratos',
    name: 'Contrato',
    excluded: 'Contrato excluído',
    excludedAll: 'Contratos exlcuídos',
    form: {
      require: {
        company: 'Empresa é obrigatório',
        type: 'Tipo é obrigatório',
        status: 'Status é obrigatório',
        number: 'Número da contrato é obrigatório',
        responsable: 'Responsável é obrigatório',
        expirationDate: 'Data de validade é obrigatório',
        issueDate: 'Data de Emissão é obrigatório',
        deadLineDate: 'Data de renovação é obrigatório',
      },
      fields: {
        company: 'Empresa',
        type: 'Tipo',
        status: 'Status',
        number: 'Número do Contrato',
        responsable: 'Responsável',
        comments: 'Observação',
        hasExpiration: 'Prazo Indeterminado?',
        issueDate: 'Data de Emissão',
        deadLineDate: 'Data de renovação',
        expirationDate: 'Data de validade',
      },
    },
  },
  permitType: {
    page_list: `Tipo de Tarefa: Listar Tipos de Tarefas`,
    page_edit: `Tipo de Tarefa: Editar Tipo de Tarefa`,
    page_new: `Tipo de Tarefa: Criar Tipo de Tarefa`,
    list: `Lista de Tipos de Tarefas`,
    new: `Criar novo Tipo de Tarefa`,
    edit: `Editar Tipo de Tarefa`,
    name: `Tipo de Tarefa`,
    names: `Tipos de Tarefas`,
    excluded: `Tipo de Tarefa excluído`,
    excludedAll: `Tipos de Tarefas excluídos`,
    listName: `Lista de Tipos de Tarefas`,
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        active: 'Ativo',
      },
    },
  },
  permitStatus: {
    page_list: `Status de Licença: Listar Status de Licença`,
    page_edit: `Status de Licença: Editar Status de Licença`,
    page_new: `Status de Licença: Criar Status de Licença`,
    list: `Lista de Status de Licença`,
    new: `Criar novo Status de Licença`,
    edit: `Editar Status de Licença`,
    name: `Status de Licença`,
    names: `Lista Status de Licença`,
    excluded: `Status de Licença excluído`,
    excludedAll: `Lista Status de Licença excluídos`,
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        color: 'Cor',
        priority: 'Prioridade'
      },
    },
  },
  contractType: {
    page_list: 'Tipo de Contrato: Listar Tipos de Contrato',
    page_edit: 'Tipo de Contrato: Editar Tipo de Contrato',
    page_new: 'Tipo de Contrato: Criar Tipo de Contrato',
    list: 'Lista de Tipos de Contrato',
    new: 'Criar novo Tipo de Contrato',
    edit: 'Editar Tipo de Contrato',
    name: 'Tipo de Contrato',
    names: 'Tipos de Contrato',
    excluded: 'Tipo de Contrato excluído',
    excludedAll: 'Tipos de Contrato excluídos',
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        active: 'Ativo',
      },
    },
  },
  contractStatus: {
    page_list: 'Status de Contrato: Listar Status de Contrato',
    page_edit: 'Status de Contrato: Editar Status de Contrato',
    page_new: 'Status de Contrato: Criar Status de Contrato',
    list: 'Lista de Status de Contrato',
    new: 'Criar novo Status de Contrato',
    edit: 'Editar Status de Contrato',
    name: 'Status de Contrato',
    names: 'Lista Status de Contrato',
    excluded: 'Status de Contrato excluído',
    excludedAll: 'Lista Status de Contrato excluídos',
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        color: 'Cor',
      },
    },
  },
  competence: {
    page_list: 'Competência: Lista de Competências',
    list: 'Lista De Competências',
    page_name: 'Competência',
    page_names: 'Competências',
    name: 'Competência',
    excluded: 'Competência excluída',
    excludedAll: 'Competências exlcuídas',
    listName: 'Lista de Compêtencias',
    form: {
      require: {
        name: 'Nome',
      },
      fields: {
        flStatus: 'Localização',
        name: 'Nome',
      },
    },
  },
  firemen: {
    page_list: 'Bombeiros: Lista de Bombeiro',
    page_edit: 'Bombeiros: Editar Bombeiro',
    page_new: 'Bombeiros: Criar Bombeiro',
    list: 'Lista de Bombeiros',
    new: 'Criar novo Bombeiro',
    edit: 'Editar Bombeiro',
    page_name: 'Bombeiro',
    page_names: 'Bombeiros',
    name: 'Bombeiro',
    excluded: 'Bombeiro excluído',
    excludedAll: 'Bombeiros exlcuídos',
    form: {
      require: {
        company: 'Empresa é obrigatório',
        type: 'Tipo é obrigatório',
        status: 'Status é obrigatório',
        number: 'Número da contrato é obrigatório',
        responsable: 'Responsável é obrigatório',
        expirationDate: 'Data de validade é obrigatório',
        issueDate: 'Data de Emissão é obrigatório',
        deadLineDate: 'Data de renovação é obrigatório',
      },
      fields: {
        company: 'Empresa',
        type: 'Tipo',
        status: 'Status',
        number: 'Número do Bombeiro',
        responsable: 'Responsável',
        comments: 'Observação',
        hasExpiration: 'Prazo Indeterminado?',
        issueDate: 'Data de Emissão',
        deadLineDate: 'Data de renovação',
        expirationDate: 'Data de validade',
      },
    },
  },
  firemenType: {
    page_list: 'Tipo de Bombeiro: Listar Tipos de Bombeiro',
    page_edit: 'Tipo de Bombeiro: Editar Tipo de Bombeiro',
    page_new: 'Tipo de Bombeiro: Criar Tipo de Bombeiro',
    list: 'Lista de Tipos de Bombeiro',
    new: 'Criar novo Tipo de Bombeiro',
    edit: 'Editar Tipo de Bombeiro',
    name: 'Tipo de Bombeiro',
    names: 'Tipos de Bombeiro',
    excluded: 'Tipo de Bombeiro excluído',
    excludedAll: 'Tipos de Bombeiro excluídos',
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        active: 'Ativo',
      },
    },
  },
  firemenStatus: {
    page_list: 'Status de Bombeiro: Listar Status de Bombeiro',
    page_edit: 'Status de Bombeiro: Editar Status de Bombeiro',
    page_new: 'Status de Bombeiro: Criar Status de Bombeiro',
    list: 'Lista de Status de Bombeiro',
    new: 'Criar novo Status de Bombeiro',
    edit: 'Editar Status de Bombeiro',
    name: 'Status de Bombeiro',
    names: 'Lista Status de Bombeiro',
    excluded: 'Status de Bombeiro excluído',
    excludedAll: 'Lista Status de Bombeiro excluídos',
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        color: 'Cor',
      },
    },
  },
  customer: {
    page_list: 'Cliente: Lista de Clientes',
    list: 'Lista De Clientes',
    page_name: 'Cliente',
    page_names: 'Clientes',
    name: 'Cliente',
    excluded: 'Cliente excluído',
    excludedAll: 'Clientes exlcuídos',
    loginSuccess: 'Login efetuado com sucesso!',
    form: {
      require: {
        name: 'Nome',
      },
      fields: {
        flStatus: 'Status',
        name: 'Nome',
        user_access:{
          description: `Se deixar em branco, todos os usuários com privilégios ao módulo "clientes", terão acesso a esse cliente em especifico.`,
          name: 'Usuários com acesso'
        }
      },
    },
  },
  regional: {
    page_list: 'Regional: Listar Regional',
    page_edit: 'Regional: Editar Regional',
    page_new: 'Regional: Criar Regional',
    list: 'Lista de Regional',
    new: 'Criar nova Regional',
    edit: 'Editar Regional',
    name: 'Regional',
    names: 'Lista Regional',
    excluded: 'Regional excluída',
    excludedAll: 'Lista de Regionais excluídas',
    listName: 'Lista de regionais',
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
        color: 'Cor',
      },
    },
  },
  managmentReport: {
    page_list: 'Relatórios Gerenciais: Listar Relatórios Gerenciais',
    page_edit: 'Relatórios Gerenciais: Editar Relatórios Gerenciais',
    page_new: 'Relatórios Gerenciais: Criar Relatórios Gerenciais',
    list: 'Lista de Relatórios Gerenciais',
    new: 'Criar nova Relatórios Gerenciais',
    edit: 'Editar Relatórios Gerenciais',
    name: 'Relatório Gerencial',
    names: 'Lista Relatórios Gerenciais',
    excluded: 'Relatórios Gerenciais excluída',
    excludedAll: 'Lista de Relatórios Gerenciais excluídas',
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        name: 'Nome',
      },
    },
  },

  permitStatusMGTRule: {
    page_list: `MGT da Licença por Status: Listar MGT da Licença por Status`,
    page_edit: `MGT da Licença por Status: Editar MGT da Licença por Status`,
    page_new: `MGT da Licença por Status: Criar MGT da Licença por Status`,
    list: `MGT da Licença por Status`,
    new: `Criar novo MGT da Licença por Status`,
    edit: `Editar MGT da Licença por Status`,
    name: `MGT da Licença por Status`,
    names: `MGT da Licença por Status`,
    excluded: `MGT da Licença por Status excluído`,
    excludedAll: `MGT da Licença por Status excluídos`,
    form: {
      require: {
        name: 'Nome é obrigatório',
      },
      fields: {
        permitStatus: 'Status',
        changeTo: 'mudar para',
        baseField: 'Campo base',
        compareField: 'Campo comparado',
        operator: 'Operador'
      },
    },
  },

  save: {
    name: 'salvar',
    update: 'salvar alterações',
    updated: 'alterações salvas',
    success: 'salvo com sucesso',
    erro: 'erro ao salvar',
    cancel: 'cancelar',
  },
  exceptions: {
    details: {
      dataIntegrityViolationProblem: {
        AccessGroup: {
          User: 'Não é possivel executar a ação, a entidade `Grupo de Acesso`, possui relação com a entidade `Usuário`.',
        },
        AccessGroups: {
          User: 'Não é possivel executar a ação, alguma das entidades selecionadas do `Grupo de Acesso` \n possui relação com a entidade `Usuário`.',
        },
        PermitType: {
          Permit:
            'Não é possivel executar a ação, a entidade `Tipo de Tarefa` \n possui relação com a entidade `Licença`.',
        },
        PermitTypes: {
          Permit:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Tipos de Tarefas`, \n possui relação com a entidade `Licença`.',
        },
        PermitStatus: {
          Permit:
            'Não é possivel executar a ação, a entidade `Status de Licença` \n possui relação com a entidade `Licença`.',
        },
        PermitStatuss: {
          Permit:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Status de Licença`, \n possui relação com a entidade `Licença`.',
        },
        ContractStatus: {
          Contract:
            'Não é possivel executar a ação, a entidade `Status de Contrato` \n possui relação com a entidade `Contrato`.',
        },
        ContractStatuss: {
          Contract:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Status de Contrato`, \n possui relação com a entidade `Contrato`.',
        },
        ContractType: {
          Contract:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Tipos de Contrato`, \n possui relação com a entidade `Contrato`.',
        },
        ContractTypes: {
          Contract:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Tipos de Contrato`, \n possui relação com a entidade `Contrato`.',
        },
        FiremenStatus: {
          Firemen:
            'Não é possivel executar a ação, a entidade `Status de Bombeiro` \n possui relação com a entidade `Bombeiro`.',
        },
        FiremenStatuss: {
          Firemen:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Status de Bombeiro`, \n possui relação com a entidade `Bombeiro`.',
        },
        FiremenType: {
          Firemen:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Tipos de Bombeiro`, \n possui relação com a entidade `Bombeiro`.',
        },
        FiremenTypes: {
          Firemen:
            'Não é possivel executar a ação, alguma das entidades selecionadas do `Tipos de Bombeiro`, \n possui relação com a entidade `Bombeiro`.',
        },
        User: {
          uk_emailxuser: `Já existe um usuário com esse email cadastrado!`,
        },
        Company: {
          uk_cnpj: `CNPJ já existente!`,
          uk_cnpj_inative_entity: `CNPJ já existente, em uma empresa inativa!`,
          uk_cnpj_excluded_entity: `CNPJ já existente, em uma empresa excluida!`,
        },
        undefined: `Violação de Integridade`,
      },
      permit:{
        issueDate:{
          isAfter:{
            expirationDate: 'A Data de Emissão precisa ser menor que a Data de Expiração.',
            deadLineDate: 'A Data de Emissão precisa ser menor que a Data de Renovação.'
          },
          min:{
            deadLineDate: 'A Data de Emissão precisa ter um período menor que 30 dias, comparadao com a Data de Renovação.'
          }
        },
        deadLineDate:{
          isAfter:{
            expirationDate: 'A Data de Renovação precisa ser menor que a Data de Expiração.'
          }
        }
      },
      Resourcenotfound: {
        accessGroup: `Grupo de Acesso não encontrado.`,
        user: `Usuário não encontrado.`,
        company: `Empresa não encontrada.`,
        permit: `Licença não encontrado.`,
        contract: `Contrato não encontrado.`,
        permitType: `Tipo de Tarefa não encontrado.`,
        permitStatus: `Status de Licença não encontrado.`,
        contractStatus: `Status de Contrato não encontrado.`,
        regional: `Status de Contrato não encontrado.`,
        contractType: `Tipo de Contrato não encontrado.`,
        competence: `Competência não encontrada.`,
        customer: `Cliente não encontrada.`,
        firemen: `Bombeiro não encontrado.`,
        firemenStatus: `Status de Bombeiro não encontrado.`,
        firemenType: `Tipo de Bombeiro não encontrado.`,
      },
      old_password_incorret: `Senha antiga incorreta`,
      Emailnotfound: `Email não encontrado`,
      regenerate_forgout: {
        password: {
          user_not_found:
            'Não existe solicitação de restaurar senha, para esse usuário!',
          invalid_operation:
            'Operação para restaurar a senha com essa url é inválida!',
          invalid_hash: 'Url inválida!',
          time_expired:
            'Tempo para restaurar a senha expirado, gere uma nova URL.',
        },
      },
    },
    code: {
      err_network:
        'Erro de conxeão com o servidor, entre em contato com o suporte.',
      err_bad_request: 'Requisição mal feita',
    },
    status: {
      403: 'Acesso Negado',
      401: 'Não autorizado',
    },
    unauthorized: 'Não autorizado',
    invalid_grant: 'Usuário não encontrado, verifique seus dados.',
    somethingwentwrong: 'Algo deu errado, entre em contato com o suporte.',
    undefined: 'Erro desconhecido, entre em contato com o suporte',
  },
};

export default pt_br;
