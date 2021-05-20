export default [
  {
    children: [
      {
        groups: [],
        is_react: false,
        label: 'Custom Views',
        options: null,
        page: '103',
        url: './include/home/customViews/index.php',
      },
    ],
    color: '2B9E93',
    icon: 'home',
    is_react: false,
    label: 'Home',
    menu_id: 'Home',
    options: null,
    page: '1',
    url: './include/home/home.php',
  },
  {
    children: [
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Services',
                options: null,
                page: '20201',
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                is_react: false,
                label: 'Hosts',
                options: null,
                page: '20202',
                url: './include/monitoring/status/monitoringHost.php',
              },
              {
                is_react: false,
                label: 'Services Grid',
                options: '&o=svcOV',
                page: '20204',
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                is_react: false,
                label: 'Services by Hostgroup',
                options: '&o=svcOVHG',
                page: '20209',
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                is_react: false,
                label: 'Services by Servicegroup',
                options: '&o=svcOVSG',
                page: '20212',
                url: './include/monitoring/status/monitoringService.php',
              },
              {
                is_react: false,
                label: 'Hostgroups Summary',
                options: '&o=hg',
                page: '20203',
                url: './include/monitoring/status/monitoringHostGroup.php',
              },
            ],
            label: 'By Status',
          },
        ],
        is_react: false,
        label: 'Status Details',
        options: null,
        page: '202',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Graphs',
                options: null,
                page: '20401',
                url: './include/views/graphs/graphs.php',
              },
            ],
            label: 'Main Menu',
          },
          {
            children: [
              {
                is_react: false,
                label: 'Templates',
                options: null,
                page: '20404',
                url: './include/views/graphTemplates/graphTemplates.php',
              },
              {
                is_react: false,
                label: 'Curves',
                options: null,
                page: '20405',
                url:
                  './include/views/componentTemplates/componentTemplates.php',
              },
              {
                is_react: false,
                label: 'Virtual Metrics',
                options: null,
                page: '20408',
                url: './include/views/virtualMetrics/virtualMetrics.php',
              },
            ],
            label: 'Parameters',
          },
        ],
        is_react: false,
        label: 'Performances',
        options: null,
        page: '204',
        url: '',
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Monitoring',
                options: null,
                page: '20701',
                url:
                  './modules/centreon-bam-server/core/dashboard/dashboard.php',
              },
              {
                is_react: false,
                label: 'Reporting',
                options: null,
                page: '20702',
                url:
                  './modules/centreon-bam-server/core/reporting/reporting.php',
              },
              {
                is_react: false,
                label: 'Logs',
                options: null,
                page: '20703',
                url: './modules/centreon-bam-server/core/logs/logs.php',
              },
            ],
            label: 'Views',
          },
        ],
        is_react: false,
        label: 'Business Activity',
        options: null,
        page: '207',
        url: './modules/centreon-bam-server/core/dashboard/dashboard.php',
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Downtimes',
                options: null,
                page: '21001',
                url: './include/monitoring/downtime/downtime.php',
              },
              {
                is_react: false,
                label: 'Recurrent downtimes',
                options: null,
                page: '21003',
                url: './include/monitoring/recurrentDowntime/downtime.php',
              },
              {
                is_react: false,
                label: 'Comments',
                options: null,
                page: '21002',
                url: './include/monitoring/comments/comments.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        is_react: false,
        label: 'Downtimes',
        options: null,
        page: '210',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Event Logs',
                options: null,
                page: '20301',
                url: './include/eventLogs/viewLog.php',
              },
              {
                is_react: false,
                label: 'System Logs',
                options: '&engine=true',
                page: '20302',
                url: './include/eventLogs/viewLog.php',
              },
            ],
            label: 'Advanced Logs',
          },
        ],
        is_react: false,
        label: 'Event Logs',
        options: null,
        page: '203',
        url: '',
      },
    ],
    color: '85B446',
    icon: 'monitoring',
    is_react: false,
    label: 'Monitoring',
    menu_id: 'Monitoring',
    options: '',
    page: '2',
    url: null,
  },
  {
    children: [
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Hosts',
                options: null,
                page: '30701',
                url: './include/reporting/dashboard/viewHostLog.php',
              },
              {
                is_react: false,
                label: 'Host Groups',
                options: null,
                page: '30703',
                url: './include/reporting/dashboard/viewHostGroupLog.php',
              },
              {
                is_react: false,
                label: 'Service Groups',
                options: null,
                page: '30704',
                url: './include/reporting/dashboard/viewServicesGroupLog.php',
              },
            ],
            label: 'Dashboard',
          },
        ],
        is_react: false,
        label: 'Dashboard',
        options: null,
        page: '307',
        url: null,
      },
    ],
    color: 'E4932C',
    icon: 'reporting',
    is_react: false,
    label: 'Reporting',
    menu_id: 'Reporting',
    options: null,
    page: '3',
    url: null,
  },
  {
    children: [
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Hosts',
                options: null,
                page: '60101',
                url: './include/configuration/configObject/host/host.php',
              },
              {
                is_react: false,
                label: 'Host Groups',
                options: null,
                page: '60102',
                url:
                  './include/configuration/configObject/hostgroup/hostGroup.php',
              },
              {
                is_react: false,
                label: 'Templates',
                options: null,
                page: '60103',
                url:
                  './include/configuration/configObject/host_template_model/hostTemplateModel.php',
              },
              {
                is_react: false,
                label: 'Categories',
                options: null,
                page: '60104',
                url:
                  './include/configuration/configObject/host_categories/hostCategories.php',
              },
            ],
            label: 'Hosts',
          },
        ],
        is_react: false,
        label: 'Hosts',
        options: null,
        page: '601',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Services by host',
                options: null,
                page: '60201',
                url:
                  './include/configuration/configObject/service/serviceByHost.php',
              },
              {
                is_react: false,
                label: 'Services by host group',
                options: null,
                page: '60202',
                url:
                  './include/configuration/configObject/service/serviceByHostGroup.php',
              },
              {
                is_react: false,
                label: 'Service Groups',
                options: null,
                page: '60203',
                url:
                  './include/configuration/configObject/servicegroup/serviceGroup.php',
              },
              {
                is_react: false,
                label: 'Templates',
                options: null,
                page: '60206',
                url:
                  './include/configuration/configObject/service_template_model/serviceTemplateModel.php',
              },
              {
                is_react: false,
                label: 'Categories',
                options: null,
                page: '60209',
                url:
                  './include/configuration/configObject/service_categories/serviceCategories.php',
              },
              {
                is_react: false,
                label: 'Meta Services',
                options: null,
                page: '60204',
                url:
                  './include/configuration/configObject/meta_service/metaService.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        is_react: false,
        label: 'Services',
        options: null,
        page: '602',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Business Activity',
                options: null,
                page: '62605',
                url:
                  './modules/centreon-bam-server/core/configuration/ba/configuration_ba.php',
              },
              {
                is_react: false,
                label: 'Business Views',
                options: null,
                page: '62604',
                url:
                  './modules/centreon-bam-server/core/configuration/group/configuration_ba_group.php',
              },
              {
                is_react: false,
                label: 'Indicators',
                options: null,
                page: '62606',
                url:
                  './modules/centreon-bam-server/core/configuration/kpi/configuration_kpi.php',
              },
              {
                is_react: false,
                label: 'Boolean Rules',
                options: null,
                page: '62611',
                url:
                  './modules/centreon-bam-server/core/configuration/boolean/configuration_boolean.php',
              },
              {
                is_react: false,
                label: 'Dependencies',
                options: null,
                page: '62612',
                url:
                  './modules/centreon-bam-server/core/configuration/dependencies/configuration_dependencies.php',
              },
            ],
            label: 'Management',
          },
          {
            children: [
              {
                is_react: false,
                label: 'Default Settings',
                options: null,
                page: '62607',
                url:
                  './modules/centreon-bam-server/core/options/general/general.php',
              },
              {
                is_react: false,
                label: 'User Settings',
                options: null,
                page: '62608',
                url: './modules/centreon-bam-server/core/options/user/user.php',
              },
            ],
            label: 'Options',
          },
          {
            children: [
              {
                is_react: false,
                label: 'Troubleshooter',
                options: null,
                page: '62610',
                url:
                  './modules/centreon-bam-server/core/help/troubleshooter/troubleshooter.php',
              },
            ],
            label: 'Help',
          },
        ],
        is_react: false,
        label: 'Business Activity',
        options: null,
        page: '626',
        url:
          './modules/centreon-bam-server/core/configuration/group/configuration_ba.php',
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Contacts / Users',
                options: null,
                page: '60301',
                url: './include/configuration/configObject/contact/contact.php',
              },
              {
                is_react: false,
                label: 'Contact Templates',
                options: null,
                page: '60306',
                url:
                  './include/configuration/configObject/contact_template_model/contact_template.php',
              },
              {
                is_react: false,
                label: 'Contact Groups',
                options: null,
                page: '60302',
                url:
                  './include/configuration/configObject/contactgroup/contactGroup.php',
              },
              {
                is_react: false,
                label: 'Time Periods',
                options: null,
                page: '60304',
                url:
                  './include/configuration/configObject/timeperiod/timeperiod.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        is_react: false,
        label: 'Users',
        options: null,
        page: '603',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Checks',
                options: '&type=2',
                page: '60801',
                url: './include/configuration/configObject/command/command.php',
              },
              {
                is_react: false,
                label: 'Notifications',
                options: '&type=1',
                page: '60802',
                url: './include/configuration/configObject/command/command.php',
              },
              {
                is_react: false,
                label: 'Discovery',
                options: '&type=4',
                page: '60807',
                url: './include/configuration/configObject/command/command.php',
              },
              {
                is_react: false,
                label: 'Miscellaneous',
                options: '&type=3',
                page: '60803',
                url: './include/configuration/configObject/command/command.php',
              },
              {
                is_react: false,
                label: 'Connectors',
                options: null,
                page: '60806',
                url:
                  './include/configuration/configObject/connector/connector.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        is_react: false,
        label: 'Commands',
        options: null,
        page: '608',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Escalations',
                options: null,
                page: '60401',
                url:
                  './include/configuration/configObject/escalation/escalation.php',
              },
            ],
            label: 'Escalations',
          },
          {
            children: [
              {
                is_react: false,
                label: 'Hosts',
                options: null,
                page: '60407',
                url:
                  './include/configuration/configObject/host_dependency/hostDependency.php',
              },
              {
                is_react: false,
                label: 'Host Groups',
                options: null,
                page: '60408',
                url:
                  './include/configuration/configObject/hostgroup_dependency/hostGroupDependency.php',
              },
              {
                is_react: false,
                label: 'Services',
                options: null,
                page: '60409',
                url:
                  './include/configuration/configObject/service_dependency/serviceDependency.php',
              },
              {
                is_react: false,
                label: 'Service Groups',
                options: null,
                page: '60410',
                url:
                  './include/configuration/configObject/servicegroup_dependency/serviceGroupDependency.php',
              },
              {
                is_react: false,
                label: 'Meta Services',
                options: null,
                page: '60411',
                url:
                  './include/configuration/configObject/metaservice_dependency/MetaServiceDependency.php',
              },
            ],
            label: 'Dependencies',
          },
        ],
        is_react: false,
        label: 'Notifications',
        options: null,
        page: '604',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'SNMP Traps',
                options: null,
                page: '61701',
                url: './include/configuration/configObject/traps/traps.php',
              },
              {
                is_react: false,
                label: 'Manufacturer',
                options: null,
                page: '61702',
                url:
                  './include/configuration/configObject/traps-manufacturer/mnftr.php',
              },
              {
                is_react: false,
                label: 'Group',
                options: null,
                page: '61705',
                url:
                  './include/configuration/configObject/traps-groups/groups.php',
              },
              {
                is_react: false,
                label: 'MIBs',
                options: null,
                page: '61703',
                url: './include/configuration/configObject/traps-mibs/mibs.php',
              },
              {
                is_react: false,
                label: 'Generate',
                options: null,
                page: '61704',
                url:
                  './include/configuration/configGenerateTraps/generateTraps.php',
              },
            ],
            label: 'SNMP Traps',
          },
        ],
        is_react: false,
        label: 'SNMP Traps',
        options: null,
        page: '617',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Manager',
                options: null,
                page: '65001',
                url: './modules/centreon-pp-manager/core/manager/main.php',
              },
            ],
            label: 'Plugin Packs',
          },
        ],
        is_react: false,
        label: 'Plugin Packs',
        options: null,
        page: '650',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Pollers',
                options: null,
                page: '60901',
                url: './include/configuration/configServers/servers.php',
              },
              {
                is_react: false,
                label: 'Engine configuration',
                options: null,
                page: '60903',
                url: './include/configuration/configNagios/nagios.php',
              },
              {
                is_react: false,
                label: 'Broker configuration',
                options: null,
                page: '60909',
                url:
                  './include/configuration/configCentreonBroker/centreon-broker.php',
              },
              {
                is_react: false,
                label: 'Resources',
                options: null,
                page: '60904',
                url: './include/configuration/configResources/resources.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        is_react: false,
        label: 'Pollers',
        options: null,
        page: '609',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Hosts',
                options: null,
                page: '61001',
                url:
                  './include/configuration/configKnowledge/display-hosts.php',
              },
              {
                is_react: false,
                label: 'Services',
                options: null,
                page: '61002',
                url:
                  './include/configuration/configKnowledge/display-services.php',
              },
              {
                is_react: false,
                label: 'Host Templates',
                options: null,
                page: '61003',
                url:
                  './include/configuration/configKnowledge/display-hostTemplates.php',
              },
              {
                is_react: false,
                label: 'Service Templates',
                options: null,
                page: '61004',
                url:
                  './include/configuration/configKnowledge/display-serviceTemplates.php',
              },
            ],
            label: 'Knowledge Base',
          },
        ],
        is_react: false,
        label: 'Knowledge Base',
        options: null,
        page: '610',
        url: null,
      },
    ],
    color: '319ED5',
    icon: 'configuration',
    is_react: false,
    label: 'Configuration',
    menu_id: 'Configuration',
    options: null,
    page: '6',
    url: null,
  },
  {
    children: [
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Centreon UI',
                options: '&o=general',
                page: '50110',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'Monitoring',
                options: '&o=engine',
                page: '50111',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'CentCore',
                options: '&o=centcore',
                page: '50117',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'My Account',
                options: '&o=c',
                page: '50104',
                url: './include/Administration/myAccount/formMyAccount.php',
              },
              {
                is_react: false,
                label: 'LDAP',
                options: '&o=ldap',
                page: '50113',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'RRDTool',
                options: '&o=rrdtool',
                page: '50114',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'Debug',
                options: '&o=debug',
                page: '50115',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'Knowledge Base',
                options: '&o=knowledgeBase',
                page: '50133',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'Backup',
                options: '&o=backup',
                page: '50165',
                url: './include/Administration/parameters/parameters.php',
              },
            ],
            label: 'Main Menu',
          },
          {
            children: [
              {
                is_react: false,
                label: 'Options',
                options: '&o=storage',
                page: '50118',
                url: './include/Administration/parameters/parameters.php',
              },
              {
                is_react: false,
                label: 'Data',
                options: null,
                page: '50119',
                url: './include/Administration/performance/manageData.php',
              },
            ],
            label: 'Performance Management',
          },
          {
            children: [
              {
                is_react: false,
                label: 'Images',
                options: null,
                page: '50102',
                url: './include/options/media/images/images.php',
              },
            ],
            label: 'Media',
          },
        ],
        is_react: false,
        label: 'Parameters',
        options: '&o=c',
        page: '501',
        url: './include/options/oreon/myAccount/formMyAccount.php',
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Access Groups',
                options: null,
                page: '50203',
                url: './include/options/accessLists/groupsACL/groupsConfig.php',
              },
              {
                is_react: false,
                label: 'Menus Access',
                options: null,
                page: '50201',
                url: './include/options/accessLists/menusACL/menusAccess.php',
              },
              {
                is_react: false,
                label: 'Resources Access',
                options: null,
                page: '50202',
                url:
                  './include/options/accessLists/resourcesACL/resourcesAccess.php',
              },
              {
                is_react: false,
                label: 'Actions Access',
                options: null,
                page: '50204',
                url:
                  './include/options/accessLists/actionsACL/actionsConfig.php',
              },
              {
                is_react: false,
                label: 'Reload ACL',
                options: null,
                page: '50205',
                url: './include/options/accessLists/reloadACL/reloadACL.php',
              },
            ],
            label: 'Access List',
          },
        ],
        is_react: false,
        label: 'ACL',
        options: null,
        page: '502',
        url: null,
      },
      {
        groups: [
          {
            children: [
              {
                is_react: true,
                label: 'Manager',
                options: null,
                page: '50709',
                url: '/administration/extensions/manager',
              },
              {
                is_react: true,
                label: 'Iframe',
                options: null,
                page: '50710',
                url: '/iframe.html',
              },
              {
                is_react: false,
                label: 'Subscription',
                options: null,
                page: '50707',
                url:
                  './modules/centreon-license-manager/frontend/app/index.php',
              },
            ],
            label: 'Extensions',
          },
        ],
        is_react: false,
        label: 'Extensions',
        options: null,
        page: '507',
        url: null,
      },
      {
        groups: [],
        is_react: false,
        label: 'Logs',
        options: null,
        page: '508',
        url: './include/Administration/configChangelog/viewLogs.php',
      },
      {
        groups: [],
        is_react: false,
        label: 'Sessions',
        options: null,
        page: '504',
        url: './include/options/session/connected_user.php',
      },
      {
        groups: [
          {
            children: [
              {
                is_react: false,
                label: 'Broker Statistics',
                options: null,
                page: '50501',
                url:
                  './include/Administration/brokerPerformance/brokerPerformance.php',
              },
              {
                is_react: false,
                label: 'Engine Statistics',
                options: null,
                page: '50502',
                url: './include/Administration/corePerformance/nagiosStats.php',
              },
              {
                is_react: false,
                label: 'Databases',
                options: null,
                page: '50503',
                url: './include/options/db/viewDBInfos.php',
              },
            ],
            label: 'Main Menu',
          },
        ],
        is_react: false,
        label: 'Platform Status',
        options: null,
        page: '505',
        url: './include/Administration/brokerPerformance/brokerPerformance.php',
      },
      {
        groups: [],
        is_react: false,
        label: 'About',
        options: null,
        page: '506',
        url: './include/Administration/about/about.php',
      },
    ],
    color: '17387B',
    icon: 'administration',
    is_react: false,
    label: 'Administration',
    menu_id: 'Administration',
    options: '&o=c',
    page: '5',
    url: null,
  },
];
