class User < ApplicationRecord

    attr_accessor :skip_password

    belongs_to :organization, optional: true
    has_many :shifts

    validates :username, presence: true, uniqueness: true
    has_secure_password
    validates :password, length: {minimum: 6},   if: :password 
    # unless: :skip_password
  

    # PASSWORD_REQUIREMENTS = /\A (?=.{6,})/x
    # validates :password, format: PASSWORD_REQUIREMENTS, unless: :skip_password


    def generate_password_token!
        self.password_reset_token = generate_base64_token
        self.password_reset_sent_at = Time.zone.now
        save!
        PasswordMailer.password_reset(self).deliver_now
      end
    
      def password_token_valid?
        (self.password_reset_sent_at + 1.hour) > Time.zone.now
      end
    
      def reset_password(password)
        self.password_reset_token = nil
        self.password = password
        save!
      end
    
      private
    
      def generate_base64_token
        test = SecureRandom.urlsafe_base64
      end

      
end
