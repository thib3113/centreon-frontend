export default [
  {
    active: true,
    children: [
      {
        active: false,
        groups: [],
        id: '103',
        is_react: '0',
        label: 'Custom Views',
        options: null,
        url: './include/home/customViews/index.php',
      },
    ],
    color: '2B9E93',
    icon: 'home',
    is_react: '0',
    label: 'Home',
    menu_id: 'Home',
    options: null,
    url: './include/home/home.php',
  },
  {
    active: false,
    children: [
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '20201',
                is_react: '0',
                label: 'Services',
                options: null,
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                active: false,
                id: '20202',
                is_react: '0',
                label: 'Hosts',
                options: null,
                url: './include/monitoring/status/monitoringHost.php',
              },
              {
                active: false,
                id: '20203',
                is_react: '0',
                label: 'Services Grid',
                options: '&o=svcOV_pb',
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                active: false,
                id: '20204',
                is_react: '0',
                label: 'Services by Hostgroup',
                options: '&o=svcOVHG_pb',
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                active: false,
                id: '20209',
                is_react: '0',
                label: 'Services by Servicegroup',
                options: '&o=svcOVSG_pb',
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                active: false,
                id: '20212',
                is_react: '0',
                label: 'Hostgroups Summary',
                options: '&o=hg',
                url: './include/monitoring/status/monitoringHostGroup.php',
              },
            ],
            label: 'By Status',
          },
        ],
        id: '202',
        is_react: '0',
        label: 'Status Details',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '20401',
                is_react: '0',
                label: 'Graphs',
                options: null,
                url: './include/views/graphs/graphs.php',
              },
            ],
            label: 'Main Menu',
          },
          {
            children: [
              {
                active: false,
                id: '20404',
                is_react: '0',
                label: 'Templates',
                options: null,
                url: './include/views/graphTemplates/graphTemplates.php',
              },
              {
                active: false,
                id: '20405',
                is_react: '0',
                label: 'Curves',
                options: null,
                url:
                  './include/views/componentTemplates/componentTemplates.php',
              },
              {
                active: false,
                id: '20408',
                is_react: '0',
                label: 'Virtual Metrics',
                options: null,
                url: './include/views/virtualMetrics/virtualMetrics.php',
              },
            ],
            label: 'Parameters',
          },
        ],
        id: '204',
        is_react: '0',
        label: 'Performances',
        options: null,
        url: '',
      },
      {
        active: false,
        groups: [],
        id: '288',
        is_react: '0',
        label: 'Map',
        options: null,
        url: './modules/centreon-map4-web-client/index.php',
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '20701',
                is_react: '0',
                label: 'Monitoring',
                options: null,
                url:
                  './modules/centreon-bam-server/core/dashboard/dashboard.php',
              },
              {
                active: false,
                id: '20702',
                is_react: '0',
                label: 'Reporting',
                options: null,
                url:
                  './modules/centreon-bam-server/core/reporting/reporting.php',
              },
              {
                active: false,
                id: '20703',
                is_react: '0',
                label: 'Logs',
                options: null,
                url: './modules/centreon-bam-server/core/logs/logs.php',
              },
            ],
            label: 'Views',
          },
        ],
        id: '207',
        is_react: '0',
        label: 'Business Activity',
        options: null,
        url: './modules/centreon-bam-server/core/dashboard/dashboard.php',
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '21001',
                is_react: '0',
                label: 'Downtimes',
                options: null,
                url: './include/monitoring/downtime/downtime.php',
              },
              {
                active: false,
                id: '21003',
                is_react: '0',
                label: 'Recurrent downtimes',
                options: null,
                url: './include/monitoring/recurrentDowntime/downtime.php',
              },
              {
                active: false,
                id: '21002',
                is_react: '0',
                label: 'Comments',
                options: null,
                url: './include/monitoring/comments/comments.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        id: '210',
        is_react: '0',
        label: 'Downtimes',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '20301',
                is_react: '0',
                label: 'Event Logs',
                options: null,
                url: './include/eventLogs/viewLog.php',
              },
            ],
            label: 'Advanced Logs',
          },
        ],
        id: '203',
        is_react: '0',
        label: 'Event Logs',
        options: null,
        url: '',
      },
    ],
    color: '85B446',
    icon: 'monitoring',
    is_react: '0',
    label: 'Monitoring',
    menu_id: 'Monitoring',
    options: '',
    url: null,
  },
  {
    active: false,
    children: [
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '30701',
                is_react: '0',
                label: 'Hosts',
                options: null,
                url: './include/reporting/dashboard/viewHostLog.php',
              },
              {
                active: false,
                id: '30703',
                is_react: '0',
                label: 'Host Groups',
                options: null,
                url: './include/reporting/dashboard/viewHostGroupLog.php',
              },
              {
                active: false,
                id: '30704',
                is_react: '0',
                label: 'Service Groups',
                options: null,
                url: './include/reporting/dashboard/viewServicesGroupLog.php',
              },
            ],
            label: 'Dashboard',
          },
        ],
        id: '307',
        is_react: '0',
        label: 'Dashboard',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '30201',
                is_react: '0',
                label: 'Report view',
                options: null,
                url: './modules/centreon-bi-server/views/archives/archive.php',
              },
            ],
            label: 'Views',
          },
          {
            children: [
              {
                active: false,
                id: '30210',
                is_react: '0',
                label: 'Jobs',
                options: null,
                url:
                  './modules/centreon-bi-server/configuration/generation/generation_task.php',
              },
              {
                active: false,
                id: '30220',
                is_react: '0',
                label: 'Job groups',
                options: null,
                url:
                  './modules/centreon-bi-server/configuration/generationGroups/groups.php',
              },
              {
                active: false,
                id: '30230',
                is_react: '0',
                label: 'Report designs',
                options: null,
                url:
                  './modules/centreon-bi-server/configuration/report/report.php',
              },
              {
                active: false,
                id: '30234',
                is_react: '0',
                label: 'Report design groups',
                options: null,
                url:
                  './modules/centreon-bi-server/configuration/reportGroups/reportGroups.php',
              },
              {
                active: false,
                id: '30240',
                is_react: '0',
                label: 'Logos',
                options: null,
                url: './modules/centreon-bi-server/configuration/logo/logo.php',
              },
            ],
            label: 'Configuration',
          },
          {
            children: [
              {
                active: false,
                id: '30233',
                is_react: '0',
                label: 'Publication rules',
                options: null,
                url:
                  './modules/centreon-bi-server/options/publications/publications.php',
              },
              {
                active: false,
                id: '30232',
                is_react: '0',
                label: 'Trash',
                options: null,
                url: './modules/centreon-bi-server/options/trash/trash.php',
              },
            ],
            label: 'Administration',
          },
        ],
        id: '302',
        is_react: '0',
        label: 'Monitoring Business Intelligence',
        options: null,
        url: './modules/centreon-bi-server/views/archives/archive.php',
      },
    ],
    color: 'E4932C',
    icon: 'reporting',
    is_react: '0',
    label: 'Reporting',
    menu_id: 'Reporting',
    options: null,
    url: null,
  },
  {
    active: false,
    children: [
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '60101',
                is_react: '0',
                label: 'Hosts',
                options: null,
                url: './include/configuration/configObject/host/host.php',
              },
              {
                active: false,
                id: '60102',
                is_react: '0',
                label: 'Host Groups',
                options: null,
                url:
                  './include/configuration/configObject/hostgroup/hostGroup.php',
              },
              {
                active: false,
                id: '60103',
                is_react: '0',
                label: 'Templates',
                options: null,
                url:
                  './include/configuration/configObject/host_template_model/hostTemplateModel.php',
              },
              {
                active: false,
                id: '60104',
                is_react: '0',
                label: 'Categories',
                options: null,
                url:
                  './include/configuration/configObject/host_categories/hostCategories.php',
              },
              {
                active: false,
                id: '60130',
                is_react: '1',
                label: 'Discovery',
                options: null,
                url: '/configuration/hosts/discovery/jobs',
              },
            ],
            label: 'Hosts',
          },
        ],
        id: '601',
        is_react: '0',
        label: 'Hosts',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '60201',
                is_react: '0',
                label: 'Services by host',
                options: null,
                url:
                  './include/configuration/configObject/service/serviceByHost.php',
              },
              {
                active: false,
                id: '60202',
                is_react: '0',
                label: 'Services by host group',
                options: null,
                url:
                  './include/configuration/configObject/service/serviceByHostGroup.php',
              },
              {
                active: false,
                id: '60203',
                is_react: '0',
                label: 'Service Groups',
                options: null,
                url:
                  './include/configuration/configObject/servicegroup/serviceGroup.php',
              },
              {
                active: false,
                id: '60206',
                is_react: '0',
                label: 'Templates',
                options: null,
                url:
                  './include/configuration/configObject/service_template_model/serviceTemplateModel.php',
              },
              {
                active: false,
                id: '60209',
                is_react: '0',
                label: 'Categories',
                options: null,
                url:
                  './include/configuration/configObject/service_categories/serviceCategories.php',
              },
              {
                active: false,
                id: '60204',
                is_react: '0',
                label: 'Meta Services',
                options: null,
                url:
                  './include/configuration/configObject/meta_service/metaService.php',
              },
            ],
            label: 'Main Menu',
          },
          {
            children: [
              {
                active: false,
                id: '60210',
                is_react: '0',
                label: 'Scan',
                options: null,
                url:
                  './modules/centreon-autodiscovery-server/views/scan/index.php',
              },
              {
                active: false,
                id: '60215',
                is_react: '0',
                label: 'Rules',
                options: null,
                url:
                  './modules/centreon-autodiscovery-server/views/rules/index.php',
              },
              {
                active: false,
                id: '60214',
                is_react: '0',
                label: 'Overview',
                options: null,
                url:
                  './modules/centreon-autodiscovery-server/views/overview/index.php',
              },
            ],
            label: 'Auto Discovery',
          },
        ],
        id: '602',
        is_react: '0',
        label: 'Services',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '62604',
                is_react: '0',
                label: 'Business Views',
                options: null,
                url:
                  './modules/centreon-bam-server/core/configuration/group/configuration_ba_group.php',
              },
              {
                active: false,
                id: '62605',
                is_react: '0',
                label: 'Business Activity',
                options: null,
                url:
                  './modules/centreon-bam-server/core/configuration/ba/configuration_ba.php',
              },
              {
                active: false,
                id: '62606',
                is_react: '0',
                label: 'Indicators',
                options: null,
                url:
                  './modules/centreon-bam-server/core/configuration/kpi/configuration_kpi.php',
              },
              {
                active: false,
                id: '62611',
                is_react: '0',
                label: 'Boolean Rules',
                options: null,
                url:
                  './modules/centreon-bam-server/core/configuration/boolean/configuration_boolean.php',
              },
              {
                active: false,
                id: '62612',
                is_react: '0',
                label: 'Dependencies',
                options: null,
                url:
                  './modules/centreon-bam-server/core/configuration/dependencies/configuration_dependencies.php',
              },
            ],
            label: 'Management',
          },
          {
            children: [
              {
                active: false,
                id: '62607',
                is_react: '0',
                label: 'Default Settings',
                options: null,
                url:
                  './modules/centreon-bam-server/core/options/general/general.php',
              },
              {
                active: false,
                id: '62608',
                is_react: '0',
                label: 'User Settings',
                options: null,
                url: './modules/centreon-bam-server/core/options/user/user.php',
              },
            ],
            label: 'Options',
          },
          {
            children: [
              {
                active: false,
                id: '62610',
                is_react: '0',
                label: 'Troubleshooter',
                options: null,
                url:
                  './modules/centreon-bam-server/core/help/troubleshooter/troubleshooter.php',
              },
            ],
            label: 'Help',
          },
        ],
        id: '626',
        is_react: '0',
        label: 'Business Activity',
        options: null,
        url:
          './modules/centreon-bam-server/core/configuration/group/configuration_ba_group.php',
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '60301',
                is_react: '0',
                label: 'Contacts / Users',
                options: null,
                url: './include/configuration/configObject/contact/contact.php',
              },
              {
                active: false,
                id: '60302',
                is_react: '0',
                label: 'Contact Groups',
                options: null,
                url:
                  './include/configuration/configObject/contactgroup/contactGroup.php',
              },
              {
                active: false,
                id: '60304',
                is_react: '0',
                label: 'Time Periods',
                options: null,
                url:
                  './include/configuration/configObject/timeperiod/timeperiod.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        id: '603',
        is_react: '0',
        label: 'Users',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '60801',
                is_react: '0',
                label: 'Checks',
                options: '&type=2',
                url: './include/configuration/configObject/command/command.php',
              },
              {
                active: false,
                id: '60802',
                is_react: '0',
                label: 'Notifications',
                options: '&type=1',
                url: './include/configuration/configObject/command/command.php',
              },
              {
                active: false,
                id: '60803',
                is_react: '0',
                label: 'Miscellaneous',
                options: '&type=3',
                url: './include/configuration/configObject/command/command.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        id: '608',
        is_react: '0',
        label: 'Commands',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '60401',
                is_react: '0',
                label: 'Escalations',
                options: null,
                url:
                  './include/configuration/configObject/escalation/escalation.php',
              },
            ],
            label: 'Escalations',
          },
          {
            children: [
              {
                active: false,
                id: '60407',
                is_react: '0',
                label: 'Hosts',
                options: null,
                url:
                  './include/configuration/configObject/host_dependency/hostDependency.php',
              },
              {
                active: false,
                id: '60408',
                is_react: '0',
                label: 'Host Groups',
                options: null,
                url:
                  './include/configuration/configObject/hostgroup_dependency/hostGroupDependency.php',
              },
              {
                active: false,
                id: '60409',
                is_react: '0',
                label: 'Services',
                options: null,
                url:
                  './include/configuration/configObject/service_dependency/serviceDependency.php',
              },
              {
                active: false,
                id: '60410',
                is_react: '0',
                label: 'Service Groups',
                options: null,
                url:
                  './include/configuration/configObject/servicegroup_dependency/serviceGroupDependency.php',
              },
              {
                active: false,
                id: '60411',
                is_react: '0',
                label: 'Meta Services',
                options: null,
                url:
                  './include/configuration/configObject/metaservice_dependency/MetaServiceDependency.php',
              },
            ],
            label: 'Dependencies',
          },
        ],
        id: '604',
        is_react: '0',
        label: 'Notifications',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '61701',
                is_react: '0',
                label: 'SNMP Traps',
                options: null,
                url: './include/configuration/configObject/traps/traps.php',
              },
              {
                active: false,
                id: '61702',
                is_react: '0',
                label: 'Manufacturer',
                options: null,
                url:
                  './include/configuration/configObject/traps-manufacturer/mnftr.php',
              },
            ],
            label: 'SNMP Traps',
          },
        ],
        id: '617',
        is_react: '0',
        label: 'SNMP Traps',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [],
        id: '650',
        is_react: '0',
        label: 'Plugin Packs',
        options: null,
        url: './modules/centreon-pp-manager/core/manager/main.php',
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '60901',
                is_react: '0',
                label: 'Pollers',
                options: null,
                url: './include/configuration/configServers/servers.php',
              },
              {
                active: false,
                id: '60903',
                is_react: '0',
                label: 'Engine configuration',
                options: null,
                url: './include/configuration/configNagios/nagios.php',
              },
              {
                active: false,
                id: '60909',
                is_react: '0',
                label: 'Broker configuration',
                options: null,
                url:
                  './include/configuration/configCentreonBroker/centreon-broker.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        id: '609',
        is_react: '0',
        label: 'Pollers',
        options: null,
        url: null,
      },
    ],
    color: '319ED5',
    icon: 'configuration',
    is_react: '0',
    label: 'Configuration',
    menu_id: 'Configuration',
    options: null,
    url: null,
  },
  {
    active: false,
    children: [
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '50110',
                is_react: '0',
                label: 'Centreon UI',
                options: '&o=general',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                active: false,
                id: '50111',
                is_react: '0',
                label: 'Monitoring',
                options: '&o=engine',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                active: false,
                id: '50104',
                is_react: '0',
                label: 'My Account',
                options: '&o=c',
                url: './include/Administration/myAccount/formMyAccount.php',
              },
              {
                active: false,
                id: '50113',
                is_react: '0',
                label: 'LDAP',
                options: '&o=ldap',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                active: false,
                id: '50114',
                is_react: '0',
                label: 'RRDTool',
                options: '&o=rrdtool',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                active: false,
                id: '50115',
                is_react: '0',
                label: 'Debug',
                options: '&o=debug',
                url: './include/Administration/parameters/parameters.php',
              },
            ],
            label: 'Main Menu',
          },
          {
            children: [
              {
                active: false,
                id: '50118',
                is_react: '0',
                label: 'Options',
                options: '&o=storage',
                url: './include/Administration/parameters/parameters.php',
              },
            ],
            label: 'Performance Management',
          },
          {
            children: [
              {
                active: false,
                id: '50102',
                is_react: '0',
                label: 'Images',
                options: null,
                url: './include/options/media/images/images.php',
              },
            ],
            label: 'Media',
          },
        ],
        id: '501',
        is_react: '0',
        label: 'Parameters',
        options: '&o=c',
        url: './include/options/oreon/myAccount/formMyAccount.php',
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '50203',
                is_react: '0',
                label: 'Access Groups',
                options: null,
                url: './include/options/accessLists/groupsACL/groupsConfig.php',
              },
              {
                active: false,
                id: '50201',
                is_react: '0',
                label: 'Menus Access',
                options: null,
                url: './include/options/accessLists/menusACL/menusAccess.php',
              },
              {
                active: false,
                id: '50202',
                is_react: '0',
                label: 'Resources Access',
                options: null,
                url:
                  './include/options/accessLists/resourcesACL/resourcesAccess.php',
              },
              {
                active: false,
                id: '50204',
                is_react: '0',
                label: 'Actions Access',
                options: null,
                url:
                  './include/options/accessLists/actionsACL/actionsConfig.php',
              },
            ],
            label: 'Access List',
          },
        ],
        id: '502',
        is_react: '0',
        label: 'ACL',
        options: null,
        url: null,
      },
      {
        active: false,
        groups: [
          {
            children: [
              {
                active: false,
                id: '50801',
                is_react: '0',
                label: 'Configuration',
                options: null,
                url: './include/Administration/configChangelog/viewLogs.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        id: '508',
        is_react: '0',
        label: 'Logs',
        options: null,
        url: './include/Administration/configChangelog/viewLogs.php',
      },
      {
        active: false,
        groups: [],
        id: '506',
        is_react: '0',
        label: 'About',
        options: null,
        url: './include/Administration/about/about.php',
      },
    ],
    color: '17387B',
    icon: 'administration',
    is_react: '0',
    label: 'Administration',
    menu_id: 'Administration',
    options: '&o=c',
    url: null,
  },
];
