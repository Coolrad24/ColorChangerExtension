from flask import Flask, jsonify, render_template, send_file, request
from flask_cors import CORS, cross_origin
import json



app = Flask(__name__)
cors = CORS(app)

color={
   "color":"null"
}
colorJson=json.dumps(color,indent=1)
app.config['CORS_HEADERS'] = "Content-Type"



@app.route('/color', methods=['GET'])
def hello():
   with open('./d.json') as myfile:
      data=myfile.read()
   with open('./d.json',"w") as myfile:
      myfile.write(data)




   jsondata=json.loads(data)
   with open('./d.json', 'r+') as f:
      data = json.load(f)
      data['color'] =  request.args.get('color')
      f.seek(0)     
      json.dump(data, f, indent=4)
      f.truncate()    
      data = jsondata
      return jsonify('data',data)

# Running/Starting the server
if __name__ ==  '__main__':
  app.run(debug=True)
 