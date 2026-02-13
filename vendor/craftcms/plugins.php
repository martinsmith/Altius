<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'craftcms/postmark' => 
  array (
    'class' => 'craftcms\\postmark\\Plugin',
    'basePath' => $vendorDir . '/craftcms/postmark/src',
    'handle' => 'postmark',
    'aliases' => 
    array (
      '@craftcms/postmark' => $vendorDir . '/craftcms/postmark/src',
    ),
    'name' => 'Postmark',
    'version' => '3.1.0',
    'description' => 'Postmark adapter for Craft CMS',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/postmark/blob/master/README.md',
  ),
  'miranj/craft-obfuscator' => 
  array (
    'class' => 'miranj\\obfuscator\\Obfuscator',
    'basePath' => $vendorDir . '/miranj/craft-obfuscator/src',
    'handle' => 'obfuscator',
    'aliases' => 
    array (
      '@miranj/obfuscator' => $vendorDir . '/miranj/craft-obfuscator/src',
    ),
    'name' => 'Obfuscator',
    'version' => '1.2.0',
    'description' => 'Adds a Twig filter to obfuscate emails using Hivelogic Enkoder.',
    'developer' => 'Miranj',
    'developerUrl' => 'https://miranj.in',
    'documentationUrl' => 'https://github.com/miranj/craft-obfuscator/blob/v1/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/miranj/craft-obfuscator/v1/CHANGELOG.md',
  ),
  'putyourlightson/craft-dashboard-begone' => 
  array (
    'class' => 'putyourlightson\\dashboardbegone\\DashboardBegone',
    'basePath' => $vendorDir . '/putyourlightson/craft-dashboard-begone/src',
    'handle' => 'dashboard-begone',
    'aliases' => 
    array (
      '@putyourlightson/dashboardbegone' => $vendorDir . '/putyourlightson/craft-dashboard-begone/src',
    ),
    'name' => 'Dashboard Begone',
    'version' => '3.0.0',
    'description' => 'Removes the dashboard and redirects users to entries.',
    'developer' => 'PutYourLightsOn',
    'developerUrl' => 'https://putyourlightson.com/',
    'documentationUrl' => 'https://putyourlightson.com/plugins/dashboard-begone',
    'changelogUrl' => 'https://raw.githubusercontent.com/putyourlightson/craft-dashboard-begone/v3/CHANGELOG.md',
  ),
  'verbb/expanded-singles' => 
  array (
    'class' => 'verbb\\expandedsingles\\ExpandedSingles',
    'basePath' => $vendorDir . '/verbb/expanded-singles/src',
    'handle' => 'expanded-singles',
    'aliases' => 
    array (
      '@verbb/expandedsingles' => $vendorDir . '/verbb/expanded-singles/src',
    ),
    'name' => 'Expanded Singles',
    'version' => '3.0.3',
    'description' => 'Alters the Entries Index sidebar to list all Singles, rather than grouping them under a \'Singles\' link.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/expanded-singles',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/expanded-singles/craft-5/CHANGELOG.md',
  ),
  'verbb/super-table' => 
  array (
    'class' => 'verbb\\supertable\\SuperTable',
    'basePath' => $vendorDir . '/verbb/super-table/src',
    'handle' => 'super-table',
    'aliases' => 
    array (
      '@verbb/supertable' => $vendorDir . '/verbb/super-table/src',
    ),
    'name' => 'Super Table',
    'version' => '4.0.5',
    'description' => 'Super-charge your Craft workflow with Super Table. Use it to group fields together or build complex Matrix-in-Matrix solutions.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/super-table',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/super-table/craft-5/CHANGELOG.md',
  ),
  'nystudio107/craft-typogrify' => 
  array (
    'class' => 'nystudio107\\typogrify\\Typogrify',
    'basePath' => $vendorDir . '/nystudio107/craft-typogrify/src',
    'handle' => 'typogrify',
    'aliases' => 
    array (
      '@nystudio107/typogrify' => $vendorDir . '/nystudio107/craft-typogrify/src',
    ),
    'name' => 'Typogrify',
    'version' => '5.0.2',
    'description' => 'Typogrify prettifies your web typography by preventing ugly quotes and \'widows\' and more',
    'developer' => 'nystudio107',
    'developerUrl' => 'https://nystudio107.com/',
    'documentationUrl' => 'https://nystudio107.com/docs/typogrify/',
  ),
  'craftcms/ckeditor' => 
  array (
    'class' => 'craft\\ckeditor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/ckeditor/src',
    'handle' => 'ckeditor',
    'aliases' => 
    array (
      '@craft/ckeditor' => $vendorDir . '/craftcms/ckeditor/src',
    ),
    'name' => 'CKEditor',
    'version' => '4.11.0',
    'description' => 'Edit rich text content in Craft CMS using CKEditor.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/ckeditor/blob/master/README.md',
  ),
  'verbb/formie' => 
  array (
    'class' => 'verbb\\formie\\Formie',
    'basePath' => $vendorDir . '/verbb/formie/src',
    'handle' => 'formie',
    'aliases' => 
    array (
      '@verbb/formie' => $vendorDir . '/verbb/formie/src',
    ),
    'name' => 'Formie',
    'version' => '3.1.11',
    'description' => 'The most user-friendly forms plugin for Craft.',
    'developer' => 'Verbb',
    'developerUrl' => 'https://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/formie',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/formie/craft-5/CHANGELOG.md',
  ),
  'nystudio107/craft-seomatic' => 
  array (
    'class' => 'nystudio107\\seomatic\\Seomatic',
    'basePath' => $vendorDir . '/nystudio107/craft-seomatic/src',
    'handle' => 'seomatic',
    'aliases' => 
    array (
      '@nystudio107/seomatic' => $vendorDir . '/nystudio107/craft-seomatic/src',
    ),
    'name' => 'SEOmatic',
    'version' => '5.1.20',
    'description' => 'SEOmatic facilitates modern SEO best practices & implementation for Craft CMS 5. It is a turnkey SEO system that is comprehensive, powerful, and flexible.',
    'developer' => 'nystudio107',
    'developerUrl' => 'https://nystudio107.com',
    'documentationUrl' => 'https://nystudio107.com/docs/seomatic/',
  ),
);
