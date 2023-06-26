require "test_helper"

class PolarisControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get polaris_index_url
    assert_response :success
  end
end
