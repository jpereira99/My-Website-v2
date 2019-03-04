from flask import Flask, render_template, request
import backend

app = Flask(__name__)

# home page
@app.route("/")
def home():
    return render_template("home.html")



# -- PORTFOLIO SECTION -- #
# software page
@app.route("/software")
def software():
    return render_template("software.html")

# graphic design page
@app.route("/graphicdesign")
def graphics():
    return render_template("graphics.html")

# photogrpahy page
@app.route("/photography")
def photos():
    return render_template("photos.html")



# -- WEBHOOK SECTION -- #
# GitHub webhook POST url
@app.route("/webhookpayload/", methods=['POST'])
def webhook():
    req_data = request.get_json()

    name = req_data['repository']['name']
    url = req_data['repository']['html_url']
    desc = req_data['repository']['description']
    time = req_data['repository']['updated_at']

    backend.jsonAppender(name, url, desc, time)

    return '''Successfully submitted into database'''

# Flickr photo webhook POST url
@app.route("/webhookpayload/photo", methods=['POST'])
def webhook2():
    req_data = request.get_json()

    name = req_data['title']
    urlId = req_data['id']
    image = req_data['url_o']
    desc = req_data['description']['_content']

    backend.flickrPhotoAppender(name, urlId, image, desc)

    return '''Successfully submitted into database'''

# Flickr graphics webhook POST url
@app.route("/webhookpayload/graphics", methods=['POST'])
def webhook3():
    req_data = request.get_json()

    name = req_data['title']
    urlId = req_data['id']
    image = req_data['url_o']
    desc = req_data['description']['_content']

    backend.flickrGraphicAppender(name, urlId, image, desc)

    return '''Successfully submitted into database'''




# -- ERROR PAGES -- #
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# run app
app.run(host='0.0.0.0', port='80')
app.register_error_handler(404, page_not_found)
