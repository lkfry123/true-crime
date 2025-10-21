<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Sitemap</title>
        <style>
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background: #0b0b0d; color: #f1f1f1; }
          a { color: #e53935; text-decoration: none; }
          .container { max-width: 960px; margin: 2rem auto; padding: 1rem; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border-bottom: 1px solid #26262b; padding: .5rem; text-align: left; }
          th { color: #b3b3b3; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Sitemap</h1>
          <xsl:choose>
            <xsl:when test="name(/*)='sitemapindex'">
              <table>
                <tr><th>Location</th></tr>
                <xsl:for-each select="s:sitemapindex/s:sitemap">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <table>
                <tr><th>URL</th><th>Last Modified</th></tr>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td><xsl:value-of select="s:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>


