<?php
namespace Project\Cli;

use Cubex\Context\Context;
use Project\ItineraryApplication;

class CliApplication extends ItineraryApplication
{
  public static function launch(Context $ctx)
  {
    $app = new static($ctx->getCubex());
    $app->setContext($ctx);
    $app->_configureConnections();
    return $app;
  }

}
