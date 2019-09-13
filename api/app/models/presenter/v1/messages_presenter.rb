module Presenter
  module V1
    class MessagesPresenter
      def initialize(messages)
        @messages = messages
      end

      def present
        jbuilder = Jbuilder.new
        build(jbuilder)
        jbuilder.target!
      end

      def build(json)
        json.messages do |messages_obj|
          messages_obj.array!(@messages) do |message|
            json.id message.id.to_s
            json.title message.title
            json.content message.content
          end
        end
      end
    end
  end
end
