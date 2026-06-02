Jekyll::Hooks.register :site, :post_write do |site|
  src = File.join(site.source, '_bibliography', 'papers.bib')
  dst = File.join(site.dest, 'assets', 'papers.bib')
  next unless File.exist?(src)
  content = File.read(src).sub(/\A---.*?---\n*/m, '')
  FileUtils.mkdir_p(File.dirname(dst))
  File.write(dst, content)
end
