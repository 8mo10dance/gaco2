require 'mail'

mail = Mail.new do
  from    'from@example.net'
  to      'to@example.net'
  subject 'This is Test Mail'
  body    'Body.'
end

mail.delivery_method :smtp,
                     address: ENV.fetch('MAILHOG_HOST', 'localhost'),
                     port: ENV.fetch('MAILHOG_PORT', 1025)

mail.deliver!
