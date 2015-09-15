class ShareAnalytics
  def self.call(page, type, share)
    new(page, type, share).data
  end

  def initialize(page, type, share)
    @page = page
    @type = type
    @share = share
  end

  def data
    puts raw_data
    raw_data.select{|share| share['id'] == share.sp_id}
  end

  def raw_data
    if button.analytics
      JSON.parse(analytics)['response'][0]['share_tests'][@type]
    else
      []
    end
  end

  private

  def button
    @button ||= Share::Button.find_by(campaign_page_id: @page.id, sp_type: @type)
  end
end
