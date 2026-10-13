# Local `jekyll serve` only (GitHub Pages ignores _plugins).
#
# WEBrick answers a Range request carrying a matching If-Range with
# 304 Not Modified instead of 206 Partial Content, so Chrome's video
# player stops with "data source error" a second into playback.
# Always serve the requested range instead.
require "webrick"

module WebrickRangeFix
  def not_modified?(req, res, mtime, etag)
    return false if req["range"]
    super
  end
end

WEBrick::HTTPServlet::DefaultFileHandler.prepend(WebrickRangeFix)
