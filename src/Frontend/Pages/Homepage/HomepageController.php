<?php
namespace Project\Frontend\Pages\Homepage;

use Project\Frontend\Layout\LayoutController;

class HomepageController extends LayoutController
{
  protected function _generateRoutes()
  {
    yield self::_route('test', 'test');
    return 'homepage';
  }

  public function processHomepage()
  {
    return "This is a basic homepage";
  }


  public function processTest()
  {
    return "This is a TEST homepage";
  }
}
